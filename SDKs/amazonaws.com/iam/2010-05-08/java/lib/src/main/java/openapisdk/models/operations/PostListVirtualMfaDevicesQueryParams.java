package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListVirtualMfaDevicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListVirtualMfaDevicesActionEnum action;
    public PostListVirtualMfaDevicesQueryParams withAction(PostListVirtualMfaDevicesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListVirtualMfaDevicesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListVirtualMfaDevicesQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListVirtualMfaDevicesVersionEnum version;
    public PostListVirtualMfaDevicesQueryParams withVersion(PostListVirtualMfaDevicesVersionEnum version) {
        this.version = version;
        return this;
    }
}