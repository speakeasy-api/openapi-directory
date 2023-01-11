package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyUserGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyUserGroupActionEnum action;
    public GetModifyUserGroupQueryParams withAction(GetModifyUserGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserGroupId")
    public String userGroupId;
    public GetModifyUserGroupQueryParams withUserGroupId(String userGroupId) {
        this.userGroupId = userGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserIdsToAdd")
    public String[] userIdsToAdd;
    public GetModifyUserGroupQueryParams withUserIdsToAdd(String[] userIdsToAdd) {
        this.userIdsToAdd = userIdsToAdd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserIdsToRemove")
    public String[] userIdsToRemove;
    public GetModifyUserGroupQueryParams withUserIdsToRemove(String[] userIdsToRemove) {
        this.userIdsToRemove = userIdsToRemove;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyUserGroupVersionEnum version;
    public GetModifyUserGroupQueryParams withVersion(GetModifyUserGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}