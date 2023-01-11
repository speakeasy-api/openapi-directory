package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListInstanceProfileTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListInstanceProfileTagsActionEnum action;
    public PostListInstanceProfileTagsQueryParams withAction(PostListInstanceProfileTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListInstanceProfileTagsVersionEnum version;
    public PostListInstanceProfileTagsQueryParams withVersion(PostListInstanceProfileTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}