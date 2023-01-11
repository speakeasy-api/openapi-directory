package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListMfaDevicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListMfaDevicesActionEnum action;
    public PostListMfaDevicesQueryParams withAction(PostListMfaDevicesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListMfaDevicesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListMfaDevicesQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListMfaDevicesVersionEnum version;
    public PostListMfaDevicesQueryParams withVersion(PostListMfaDevicesVersionEnum version) {
        this.version = version;
        return this;
    }
}