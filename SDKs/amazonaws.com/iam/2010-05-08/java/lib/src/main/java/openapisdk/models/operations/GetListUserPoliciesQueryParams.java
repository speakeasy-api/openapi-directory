package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListUserPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListUserPoliciesActionEnum action;
    public GetListUserPoliciesQueryParams withAction(GetListUserPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListUserPoliciesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListUserPoliciesQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetListUserPoliciesQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListUserPoliciesVersionEnum version;
    public GetListUserPoliciesQueryParams withVersion(GetListUserPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}