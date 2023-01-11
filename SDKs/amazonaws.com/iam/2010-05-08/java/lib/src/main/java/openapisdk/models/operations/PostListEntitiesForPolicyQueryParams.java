package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListEntitiesForPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListEntitiesForPolicyActionEnum action;
    public PostListEntitiesForPolicyQueryParams withAction(PostListEntitiesForPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListEntitiesForPolicyQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListEntitiesForPolicyQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListEntitiesForPolicyVersionEnum version;
    public PostListEntitiesForPolicyQueryParams withVersion(PostListEntitiesForPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}