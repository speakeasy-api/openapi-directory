package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagMfaDeviceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostTagMfaDeviceActionEnum action;
    public PostTagMfaDeviceQueryParams withAction(PostTagMfaDeviceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostTagMfaDeviceVersionEnum version;
    public PostTagMfaDeviceQueryParams withVersion(PostTagMfaDeviceVersionEnum version) {
        this.version = version;
        return this;
    }
}