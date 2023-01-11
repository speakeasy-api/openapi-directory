package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagMfaDeviceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUntagMfaDeviceActionEnum action;
    public PostUntagMfaDeviceQueryParams withAction(PostUntagMfaDeviceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUntagMfaDeviceVersionEnum version;
    public PostUntagMfaDeviceQueryParams withVersion(PostUntagMfaDeviceVersionEnum version) {
        this.version = version;
        return this;
    }
}