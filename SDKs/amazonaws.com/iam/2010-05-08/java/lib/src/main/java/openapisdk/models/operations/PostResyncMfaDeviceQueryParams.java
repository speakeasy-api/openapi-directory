package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResyncMfaDeviceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostResyncMfaDeviceActionEnum action;
    public PostResyncMfaDeviceQueryParams withAction(PostResyncMfaDeviceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostResyncMfaDeviceVersionEnum version;
    public PostResyncMfaDeviceQueryParams withVersion(PostResyncMfaDeviceVersionEnum version) {
        this.version = version;
        return this;
    }
}