package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListEntitiesForPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListEntitiesForPolicyActionEnum action;
    public GetListEntitiesForPolicyQueryParams withAction(GetListEntitiesForPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EntityFilter")
    public GetListEntitiesForPolicyEntityFilterEnum entityFilter;
    public GetListEntitiesForPolicyQueryParams withEntityFilter(GetListEntitiesForPolicyEntityFilterEnum entityFilter) {
        this.entityFilter = entityFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListEntitiesForPolicyQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListEntitiesForPolicyQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PathPrefix")
    public String pathPrefix;
    public GetListEntitiesForPolicyQueryParams withPathPrefix(String pathPrefix) {
        this.pathPrefix = pathPrefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyArn")
    public String policyArn;
    public GetListEntitiesForPolicyQueryParams withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyUsageFilter")
    public GetListEntitiesForPolicyPolicyUsageFilterEnum policyUsageFilter;
    public GetListEntitiesForPolicyQueryParams withPolicyUsageFilter(GetListEntitiesForPolicyPolicyUsageFilterEnum policyUsageFilter) {
        this.policyUsageFilter = policyUsageFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListEntitiesForPolicyVersionEnum version;
    public GetListEntitiesForPolicyQueryParams withVersion(GetListEntitiesForPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}