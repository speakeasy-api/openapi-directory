package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListUserPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListUserPoliciesActionEnum action;
    public PostListUserPoliciesQueryParams withAction(PostListUserPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListUserPoliciesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListUserPoliciesQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListUserPoliciesVersionEnum version;
    public PostListUserPoliciesQueryParams withVersion(PostListUserPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}