package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateSamlProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateSamlProviderActionEnum action;
    public GetUpdateSamlProviderQueryParams withAction(GetUpdateSamlProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SAMLMetadataDocument")
    public String samlMetadataDocument;
    public GetUpdateSamlProviderQueryParams withSamlMetadataDocument(String samlMetadataDocument) {
        this.samlMetadataDocument = samlMetadataDocument;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SAMLProviderArn")
    public String samlProviderArn;
    public GetUpdateSamlProviderQueryParams withSamlProviderArn(String samlProviderArn) {
        this.samlProviderArn = samlProviderArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateSamlProviderVersionEnum version;
    public GetUpdateSamlProviderQueryParams withVersion(GetUpdateSamlProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}