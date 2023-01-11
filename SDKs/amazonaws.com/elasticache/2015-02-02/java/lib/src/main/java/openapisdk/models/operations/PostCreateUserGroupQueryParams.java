package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateUserGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateUserGroupActionEnum action;
    public PostCreateUserGroupQueryParams withAction(PostCreateUserGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateUserGroupVersionEnum version;
    public PostCreateUserGroupQueryParams withVersion(PostCreateUserGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}