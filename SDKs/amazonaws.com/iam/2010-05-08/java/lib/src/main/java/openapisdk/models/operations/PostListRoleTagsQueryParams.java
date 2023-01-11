package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListRoleTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListRoleTagsActionEnum action;
    public PostListRoleTagsQueryParams withAction(PostListRoleTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListRoleTagsVersionEnum version;
    public PostListRoleTagsQueryParams withVersion(PostListRoleTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}