package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteUserGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteUserGroupActionEnum action;
    public PostDeleteUserGroupQueryParams withAction(PostDeleteUserGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteUserGroupVersionEnum version;
    public PostDeleteUserGroupQueryParams withVersion(PostDeleteUserGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}