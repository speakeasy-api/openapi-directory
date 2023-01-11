package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListSamlProviderTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListSamlProviderTagsActionEnum action;
    public GetListSamlProviderTagsQueryParams withAction(GetListSamlProviderTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListSamlProviderTagsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListSamlProviderTagsQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SAMLProviderArn")
    public String samlProviderArn;
    public GetListSamlProviderTagsQueryParams withSamlProviderArn(String samlProviderArn) {
        this.samlProviderArn = samlProviderArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListSamlProviderTagsVersionEnum version;
    public GetListSamlProviderTagsQueryParams withVersion(GetListSamlProviderTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}