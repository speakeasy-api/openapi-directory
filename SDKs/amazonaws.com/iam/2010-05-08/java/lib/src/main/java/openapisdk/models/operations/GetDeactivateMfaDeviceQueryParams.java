package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeactivateMfaDeviceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeactivateMfaDeviceActionEnum action;
    public GetDeactivateMfaDeviceQueryParams withAction(GetDeactivateMfaDeviceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SerialNumber")
    public String serialNumber;
    public GetDeactivateMfaDeviceQueryParams withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetDeactivateMfaDeviceQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeactivateMfaDeviceVersionEnum version;
    public GetDeactivateMfaDeviceQueryParams withVersion(GetDeactivateMfaDeviceVersionEnum version) {
        this.version = version;
        return this;
    }
}