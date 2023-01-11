package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListGroupPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListGroupPoliciesActionEnum action;
    public GetListGroupPoliciesQueryParams withAction(GetListGroupPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GroupName")
    public String groupName;
    public GetListGroupPoliciesQueryParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListGroupPoliciesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListGroupPoliciesQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListGroupPoliciesVersionEnum version;
    public GetListGroupPoliciesQueryParams withVersion(GetListGroupPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}