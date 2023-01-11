package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListPolicyVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListPolicyVersionsActionEnum action;
    public PostListPolicyVersionsQueryParams withAction(PostListPolicyVersionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListPolicyVersionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListPolicyVersionsQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListPolicyVersionsVersionEnum version;
    public PostListPolicyVersionsQueryParams withVersion(PostListPolicyVersionsVersionEnum version) {
        this.version = version;
        return this;
    }
}