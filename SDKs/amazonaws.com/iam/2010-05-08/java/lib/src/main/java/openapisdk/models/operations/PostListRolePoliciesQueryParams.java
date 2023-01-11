package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListRolePoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListRolePoliciesActionEnum action;
    public PostListRolePoliciesQueryParams withAction(PostListRolePoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListRolePoliciesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListRolePoliciesQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListRolePoliciesVersionEnum version;
    public PostListRolePoliciesQueryParams withVersion(PostListRolePoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}