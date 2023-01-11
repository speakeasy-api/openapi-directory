package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListMfaDeviceTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListMfaDeviceTagsActionEnum action;
    public PostListMfaDeviceTagsQueryParams withAction(PostListMfaDeviceTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListMfaDeviceTagsVersionEnum version;
    public PostListMfaDeviceTagsQueryParams withVersion(PostListMfaDeviceTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}