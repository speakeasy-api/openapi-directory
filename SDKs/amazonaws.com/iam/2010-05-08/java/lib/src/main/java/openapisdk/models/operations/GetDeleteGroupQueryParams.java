package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteGroupActionEnum action;
    public GetDeleteGroupQueryParams withAction(GetDeleteGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GroupName")
    public String groupName;
    public GetDeleteGroupQueryParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteGroupVersionEnum version;
    public GetDeleteGroupQueryParams withVersion(GetDeleteGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}