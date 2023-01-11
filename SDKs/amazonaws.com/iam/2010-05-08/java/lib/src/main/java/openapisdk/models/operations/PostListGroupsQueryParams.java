package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListGroupsActionEnum action;
    public PostListGroupsQueryParams withAction(PostListGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListGroupsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListGroupsQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListGroupsVersionEnum version;
    public PostListGroupsQueryParams withVersion(PostListGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}