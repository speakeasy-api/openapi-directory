package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateGroupActionEnum action;
    public GetUpdateGroupQueryParams withAction(GetUpdateGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GroupName")
    public String groupName;
    public GetUpdateGroupQueryParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NewGroupName")
    public String newGroupName;
    public GetUpdateGroupQueryParams withNewGroupName(String newGroupName) {
        this.newGroupName = newGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NewPath")
    public String newPath;
    public GetUpdateGroupQueryParams withNewPath(String newPath) {
        this.newPath = newPath;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateGroupVersionEnum version;
    public GetUpdateGroupQueryParams withVersion(GetUpdateGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}