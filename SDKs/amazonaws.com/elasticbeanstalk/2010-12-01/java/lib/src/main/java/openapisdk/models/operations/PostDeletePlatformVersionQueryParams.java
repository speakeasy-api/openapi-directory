package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeletePlatformVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeletePlatformVersionActionEnum action;
    public PostDeletePlatformVersionQueryParams withAction(PostDeletePlatformVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeletePlatformVersionVersionEnum version;
    public PostDeletePlatformVersionQueryParams withVersion(PostDeletePlatformVersionVersionEnum version) {
        this.version = version;
        return this;
    }
}