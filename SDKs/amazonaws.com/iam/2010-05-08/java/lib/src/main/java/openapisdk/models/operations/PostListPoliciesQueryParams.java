package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListPoliciesActionEnum action;
    public PostListPoliciesQueryParams withAction(PostListPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListPoliciesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListPoliciesQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListPoliciesVersionEnum version;
    public PostListPoliciesQueryParams withVersion(PostListPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}