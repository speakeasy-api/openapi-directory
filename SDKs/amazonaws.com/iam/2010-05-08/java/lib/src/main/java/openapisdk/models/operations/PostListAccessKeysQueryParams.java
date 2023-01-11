package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListAccessKeysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListAccessKeysActionEnum action;
    public PostListAccessKeysQueryParams withAction(PostListAccessKeysActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListAccessKeysQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListAccessKeysQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListAccessKeysVersionEnum version;
    public PostListAccessKeysQueryParams withVersion(PostListAccessKeysVersionEnum version) {
        this.version = version;
        return this;
    }
}