package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetAccountAuthorizationDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetAccountAuthorizationDetailsActionEnum action;
    public GetGetAccountAuthorizationDetailsQueryParams withAction(GetGetAccountAuthorizationDetailsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Filter")
    public openapisdk.models.shared.EntityTypeEnum[] filter;
    public GetGetAccountAuthorizationDetailsQueryParams withFilter(openapisdk.models.shared.EntityTypeEnum[] filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetGetAccountAuthorizationDetailsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetGetAccountAuthorizationDetailsQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetAccountAuthorizationDetailsVersionEnum version;
    public GetGetAccountAuthorizationDetailsQueryParams withVersion(GetGetAccountAuthorizationDetailsVersionEnum version) {
        this.version = version;
        return this;
    }
}