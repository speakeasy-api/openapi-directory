package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListPoliciesActionEnum action;
    public GetListPoliciesQueryParams withAction(GetListPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListPoliciesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListPoliciesQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OnlyAttached")
    public Boolean onlyAttached;
    public GetListPoliciesQueryParams withOnlyAttached(Boolean onlyAttached) {
        this.onlyAttached = onlyAttached;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PathPrefix")
    public String pathPrefix;
    public GetListPoliciesQueryParams withPathPrefix(String pathPrefix) {
        this.pathPrefix = pathPrefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyUsageFilter")
    public GetListPoliciesPolicyUsageFilterEnum policyUsageFilter;
    public GetListPoliciesQueryParams withPolicyUsageFilter(GetListPoliciesPolicyUsageFilterEnum policyUsageFilter) {
        this.policyUsageFilter = policyUsageFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Scope")
    public GetListPoliciesScopeEnum scope;
    public GetListPoliciesQueryParams withScope(GetListPoliciesScopeEnum scope) {
        this.scope = scope;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListPoliciesVersionEnum version;
    public GetListPoliciesQueryParams withVersion(GetListPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}