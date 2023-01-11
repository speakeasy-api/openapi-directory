package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListInstanceProfilesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListInstanceProfilesActionEnum action;
    public PostListInstanceProfilesQueryParams withAction(PostListInstanceProfilesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListInstanceProfilesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListInstanceProfilesQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListInstanceProfilesVersionEnum version;
    public PostListInstanceProfilesQueryParams withVersion(PostListInstanceProfilesVersionEnum version) {
        this.version = version;
        return this;
    }
}