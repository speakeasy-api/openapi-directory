package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListAttachedRolePoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListAttachedRolePoliciesActionEnum action;
    public GetListAttachedRolePoliciesQueryParams withAction(GetListAttachedRolePoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListAttachedRolePoliciesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListAttachedRolePoliciesQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PathPrefix")
    public String pathPrefix;
    public GetListAttachedRolePoliciesQueryParams withPathPrefix(String pathPrefix) {
        this.pathPrefix = pathPrefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleName")
    public String roleName;
    public GetListAttachedRolePoliciesQueryParams withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListAttachedRolePoliciesVersionEnum version;
    public GetListAttachedRolePoliciesQueryParams withVersion(GetListAttachedRolePoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}