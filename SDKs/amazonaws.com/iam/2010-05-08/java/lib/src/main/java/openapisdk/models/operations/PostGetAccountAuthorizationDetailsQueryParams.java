package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetAccountAuthorizationDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetAccountAuthorizationDetailsActionEnum action;
    public PostGetAccountAuthorizationDetailsQueryParams withAction(PostGetAccountAuthorizationDetailsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostGetAccountAuthorizationDetailsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostGetAccountAuthorizationDetailsQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetAccountAuthorizationDetailsVersionEnum version;
    public PostGetAccountAuthorizationDetailsQueryParams withVersion(PostGetAccountAuthorizationDetailsVersionEnum version) {
        this.version = version;
        return this;
    }
}