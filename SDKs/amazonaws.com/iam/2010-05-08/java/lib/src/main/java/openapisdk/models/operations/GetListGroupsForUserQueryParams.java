package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListGroupsForUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListGroupsForUserActionEnum action;
    public GetListGroupsForUserQueryParams withAction(GetListGroupsForUserActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListGroupsForUserQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListGroupsForUserQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetListGroupsForUserQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListGroupsForUserVersionEnum version;
    public GetListGroupsForUserQueryParams withVersion(GetListGroupsForUserVersionEnum version) {
        this.version = version;
        return this;
    }
}