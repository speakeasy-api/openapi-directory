package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteUserGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteUserGroupActionEnum action;
    public GetDeleteUserGroupQueryParams withAction(GetDeleteUserGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserGroupId")
    public String userGroupId;
    public GetDeleteUserGroupQueryParams withUserGroupId(String userGroupId) {
        this.userGroupId = userGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteUserGroupVersionEnum version;
    public GetDeleteUserGroupQueryParams withVersion(GetDeleteUserGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}