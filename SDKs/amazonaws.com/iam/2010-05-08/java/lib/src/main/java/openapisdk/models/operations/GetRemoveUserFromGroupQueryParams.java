package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRemoveUserFromGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRemoveUserFromGroupActionEnum action;
    public GetRemoveUserFromGroupQueryParams withAction(GetRemoveUserFromGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GroupName")
    public String groupName;
    public GetRemoveUserFromGroupQueryParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetRemoveUserFromGroupQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRemoveUserFromGroupVersionEnum version;
    public GetRemoveUserFromGroupQueryParams withVersion(GetRemoveUserFromGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}