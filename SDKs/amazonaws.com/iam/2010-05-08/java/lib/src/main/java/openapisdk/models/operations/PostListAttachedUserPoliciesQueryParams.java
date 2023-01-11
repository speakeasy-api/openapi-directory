package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListAttachedUserPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListAttachedUserPoliciesActionEnum action;
    public PostListAttachedUserPoliciesQueryParams withAction(PostListAttachedUserPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListAttachedUserPoliciesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListAttachedUserPoliciesQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListAttachedUserPoliciesVersionEnum version;
    public PostListAttachedUserPoliciesQueryParams withVersion(PostListAttachedUserPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}