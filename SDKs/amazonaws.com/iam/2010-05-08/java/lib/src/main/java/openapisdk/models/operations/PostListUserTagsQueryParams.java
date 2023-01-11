package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListUserTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListUserTagsActionEnum action;
    public PostListUserTagsQueryParams withAction(PostListUserTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListUserTagsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListUserTagsQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListUserTagsVersionEnum version;
    public PostListUserTagsQueryParams withVersion(PostListUserTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}