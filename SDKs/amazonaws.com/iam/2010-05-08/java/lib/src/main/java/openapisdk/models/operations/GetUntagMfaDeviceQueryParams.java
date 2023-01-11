package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUntagMfaDeviceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUntagMfaDeviceActionEnum action;
    public GetUntagMfaDeviceQueryParams withAction(GetUntagMfaDeviceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SerialNumber")
    public String serialNumber;
    public GetUntagMfaDeviceQueryParams withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TagKeys")
    public String[] tagKeys;
    public GetUntagMfaDeviceQueryParams withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUntagMfaDeviceVersionEnum version;
    public GetUntagMfaDeviceQueryParams withVersion(GetUntagMfaDeviceVersionEnum version) {
        this.version = version;
        return this;
    }
}