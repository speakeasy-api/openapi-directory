package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAddTagsActionEnum action;
    public PostAddTagsQueryParams withAction(PostAddTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAddTagsVersionEnum version;
    public PostAddTagsQueryParams withVersion(PostAddTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}