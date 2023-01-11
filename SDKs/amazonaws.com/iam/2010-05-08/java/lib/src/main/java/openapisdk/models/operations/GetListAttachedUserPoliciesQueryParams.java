package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListAttachedUserPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListAttachedUserPoliciesActionEnum action;
    public GetListAttachedUserPoliciesQueryParams withAction(GetListAttachedUserPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListAttachedUserPoliciesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListAttachedUserPoliciesQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PathPrefix")
    public String pathPrefix;
    public GetListAttachedUserPoliciesQueryParams withPathPrefix(String pathPrefix) {
        this.pathPrefix = pathPrefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetListAttachedUserPoliciesQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListAttachedUserPoliciesVersionEnum version;
    public GetListAttachedUserPoliciesQueryParams withVersion(GetListAttachedUserPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}