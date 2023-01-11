package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListGroupsForUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListGroupsForUserActionEnum action;
    public PostListGroupsForUserQueryParams withAction(PostListGroupsForUserActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListGroupsForUserQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListGroupsForUserQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListGroupsForUserVersionEnum version;
    public PostListGroupsForUserQueryParams withVersion(PostListGroupsForUserVersionEnum version) {
        this.version = version;
        return this;
    }
}