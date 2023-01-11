package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateOrUpdateTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateOrUpdateTagsActionEnum action;
    public PostCreateOrUpdateTagsQueryParams withAction(PostCreateOrUpdateTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateOrUpdateTagsVersionEnum version;
    public PostCreateOrUpdateTagsQueryParams withVersion(PostCreateOrUpdateTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}