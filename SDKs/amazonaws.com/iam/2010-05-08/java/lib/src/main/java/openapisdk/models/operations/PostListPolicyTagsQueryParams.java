package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListPolicyTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListPolicyTagsActionEnum action;
    public PostListPolicyTagsQueryParams withAction(PostListPolicyTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListPolicyTagsVersionEnum version;
    public PostListPolicyTagsQueryParams withVersion(PostListPolicyTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}