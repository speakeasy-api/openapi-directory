package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListRolePoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListRolePoliciesActionEnum action;
    public GetListRolePoliciesQueryParams withAction(GetListRolePoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListRolePoliciesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListRolePoliciesQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetListRolePoliciesQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListRolePoliciesVersionEnum version;
    public GetListRolePoliciesQueryParams withVersion(GetListRolePoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}