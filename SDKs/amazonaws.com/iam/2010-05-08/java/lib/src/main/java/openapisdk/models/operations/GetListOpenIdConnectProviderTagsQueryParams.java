package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListOpenIdConnectProviderTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListOpenIdConnectProviderTagsActionEnum action;
    public GetListOpenIdConnectProviderTagsQueryParams withAction(GetListOpenIdConnectProviderTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListOpenIdConnectProviderTagsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListOpenIdConnectProviderTagsQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OpenIDConnectProviderArn")
    public String openIDConnectProviderArn;
    public GetListOpenIdConnectProviderTagsQueryParams withOpenIdConnectProviderArn(String openIDConnectProviderArn) {
        this.openIDConnectProviderArn = openIDConnectProviderArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListOpenIdConnectProviderTagsVersionEnum version;
    public GetListOpenIdConnectProviderTagsQueryParams withVersion(GetListOpenIdConnectProviderTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}