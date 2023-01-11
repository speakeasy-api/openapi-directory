package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListAttachedGroupPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListAttachedGroupPoliciesActionEnum action;
    public GetListAttachedGroupPoliciesQueryParams withAction(GetListAttachedGroupPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GroupName")
    public String groupName;
    public GetListAttachedGroupPoliciesQueryParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListAttachedGroupPoliciesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListAttachedGroupPoliciesQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PathPrefix")
    public String pathPrefix;
    public GetListAttachedGroupPoliciesQueryParams withPathPrefix(String pathPrefix) {
        this.pathPrefix = pathPrefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListAttachedGroupPoliciesVersionEnum version;
    public GetListAttachedGroupPoliciesQueryParams withVersion(GetListAttachedGroupPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}