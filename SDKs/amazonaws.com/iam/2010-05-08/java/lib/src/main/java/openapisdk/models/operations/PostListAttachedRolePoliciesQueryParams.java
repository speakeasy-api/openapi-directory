package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListAttachedRolePoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListAttachedRolePoliciesActionEnum action;
    public PostListAttachedRolePoliciesQueryParams withAction(PostListAttachedRolePoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListAttachedRolePoliciesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListAttachedRolePoliciesQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListAttachedRolePoliciesVersionEnum version;
    public PostListAttachedRolePoliciesQueryParams withVersion(PostListAttachedRolePoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}