package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteTagsActionEnum action;
    public PostDeleteTagsQueryParams withAction(PostDeleteTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteTagsVersionEnum version;
    public PostDeleteTagsQueryParams withVersion(PostDeleteTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}