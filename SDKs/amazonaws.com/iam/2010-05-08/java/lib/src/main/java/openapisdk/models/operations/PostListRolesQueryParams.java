package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListRolesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListRolesActionEnum action;
    public PostListRolesQueryParams withAction(PostListRolesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListRolesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListRolesQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListRolesVersionEnum version;
    public PostListRolesQueryParams withVersion(PostListRolesVersionEnum version) {
        this.version = version;
        return this;
    }
}