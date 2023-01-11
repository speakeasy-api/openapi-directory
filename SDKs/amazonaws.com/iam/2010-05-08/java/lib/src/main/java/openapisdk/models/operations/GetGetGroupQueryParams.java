package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetGroupActionEnum action;
    public GetGetGroupQueryParams withAction(GetGetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GroupName")
    public String groupName;
    public GetGetGroupQueryParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetGetGroupQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetGetGroupQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetGroupVersionEnum version;
    public GetGetGroupQueryParams withVersion(GetGetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}