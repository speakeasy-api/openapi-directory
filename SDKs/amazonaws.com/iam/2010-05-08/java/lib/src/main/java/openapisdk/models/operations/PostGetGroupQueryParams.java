package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetGroupActionEnum action;
    public PostGetGroupQueryParams withAction(PostGetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostGetGroupQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostGetGroupQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetGroupVersionEnum version;
    public PostGetGroupQueryParams withVersion(PostGetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}