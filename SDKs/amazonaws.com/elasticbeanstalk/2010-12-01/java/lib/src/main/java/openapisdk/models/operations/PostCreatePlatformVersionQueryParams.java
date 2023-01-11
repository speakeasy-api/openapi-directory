package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreatePlatformVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreatePlatformVersionActionEnum action;
    public PostCreatePlatformVersionQueryParams withAction(PostCreatePlatformVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreatePlatformVersionVersionEnum version;
    public PostCreatePlatformVersionQueryParams withVersion(PostCreatePlatformVersionVersionEnum version) {
        this.version = version;
        return this;
    }
}