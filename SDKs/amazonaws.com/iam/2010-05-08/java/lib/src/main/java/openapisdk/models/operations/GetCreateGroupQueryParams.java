package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateGroupActionEnum action;
    public GetCreateGroupQueryParams withAction(GetCreateGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GroupName")
    public String groupName;
    public GetCreateGroupQueryParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Path")
    public String path;
    public GetCreateGroupQueryParams withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateGroupVersionEnum version;
    public GetCreateGroupQueryParams withVersion(GetCreateGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}