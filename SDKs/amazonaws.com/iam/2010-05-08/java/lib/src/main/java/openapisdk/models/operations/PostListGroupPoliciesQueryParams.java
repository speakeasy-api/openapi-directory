package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListGroupPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListGroupPoliciesActionEnum action;
    public PostListGroupPoliciesQueryParams withAction(PostListGroupPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListGroupPoliciesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListGroupPoliciesQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListGroupPoliciesVersionEnum version;
    public PostListGroupPoliciesQueryParams withVersion(PostListGroupPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}