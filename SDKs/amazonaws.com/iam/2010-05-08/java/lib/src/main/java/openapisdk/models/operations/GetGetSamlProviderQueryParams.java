package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetSamlProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetSamlProviderActionEnum action;
    public GetGetSamlProviderQueryParams withAction(GetGetSamlProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SAMLProviderArn")
    public String samlProviderArn;
    public GetGetSamlProviderQueryParams withSamlProviderArn(String samlProviderArn) {
        this.samlProviderArn = samlProviderArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetSamlProviderVersionEnum version;
    public GetGetSamlProviderQueryParams withVersion(GetGetSamlProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}