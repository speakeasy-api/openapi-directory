package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyUserGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyUserGroupActionEnum action;
    public PostModifyUserGroupQueryParams withAction(PostModifyUserGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyUserGroupVersionEnum version;
    public PostModifyUserGroupQueryParams withVersion(PostModifyUserGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}