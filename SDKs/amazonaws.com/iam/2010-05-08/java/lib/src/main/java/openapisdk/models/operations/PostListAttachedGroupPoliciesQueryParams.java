package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListAttachedGroupPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListAttachedGroupPoliciesActionEnum action;
    public PostListAttachedGroupPoliciesQueryParams withAction(PostListAttachedGroupPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListAttachedGroupPoliciesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListAttachedGroupPoliciesQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListAttachedGroupPoliciesVersionEnum version;
    public PostListAttachedGroupPoliciesQueryParams withVersion(PostListAttachedGroupPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}