package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListSshPublicKeysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListSshPublicKeysActionEnum action;
    public PostListSshPublicKeysQueryParams withAction(PostListSshPublicKeysActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListSshPublicKeysQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListSshPublicKeysQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListSshPublicKeysVersionEnum version;
    public PostListSshPublicKeysQueryParams withVersion(PostListSshPublicKeysVersionEnum version) {
        this.version = version;
        return this;
    }
}