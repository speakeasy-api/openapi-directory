package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateAccessKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateAccessKeyActionEnum action;
    public PostCreateAccessKeyQueryParams withAction(PostCreateAccessKeyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateAccessKeyVersionEnum version;
    public PostCreateAccessKeyQueryParams withVersion(PostCreateAccessKeyVersionEnum version) {
        this.version = version;
        return this;
    }
}