package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListUsersActionEnum action;
    public PostListUsersQueryParams withAction(PostListUsersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListUsersQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListUsersQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListUsersVersionEnum version;
    public PostListUsersQueryParams withVersion(PostListUsersVersionEnum version) {
        this.version = version;
        return this;
    }
}