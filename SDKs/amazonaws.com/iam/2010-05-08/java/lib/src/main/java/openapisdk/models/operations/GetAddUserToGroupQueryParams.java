package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddUserToGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAddUserToGroupActionEnum action;
    public GetAddUserToGroupQueryParams withAction(GetAddUserToGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GroupName")
    public String groupName;
    public GetAddUserToGroupQueryParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetAddUserToGroupQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAddUserToGroupVersionEnum version;
    public GetAddUserToGroupQueryParams withVersion(GetAddUserToGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}