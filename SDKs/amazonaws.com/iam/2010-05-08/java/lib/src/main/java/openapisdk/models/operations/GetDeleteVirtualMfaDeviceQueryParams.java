package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteVirtualMfaDeviceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteVirtualMfaDeviceActionEnum action;
    public GetDeleteVirtualMfaDeviceQueryParams withAction(GetDeleteVirtualMfaDeviceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SerialNumber")
    public String serialNumber;
    public GetDeleteVirtualMfaDeviceQueryParams withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteVirtualMfaDeviceVersionEnum version;
    public GetDeleteVirtualMfaDeviceQueryParams withVersion(GetDeleteVirtualMfaDeviceVersionEnum version) {
        this.version = version;
        return this;
    }
}