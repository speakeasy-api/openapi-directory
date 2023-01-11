package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteSamlProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteSamlProviderActionEnum action;
    public GetDeleteSamlProviderQueryParams withAction(GetDeleteSamlProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SAMLProviderArn")
    public String samlProviderArn;
    public GetDeleteSamlProviderQueryParams withSamlProviderArn(String samlProviderArn) {
        this.samlProviderArn = samlProviderArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteSamlProviderVersionEnum version;
    public GetDeleteSamlProviderQueryParams withVersion(GetDeleteSamlProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}