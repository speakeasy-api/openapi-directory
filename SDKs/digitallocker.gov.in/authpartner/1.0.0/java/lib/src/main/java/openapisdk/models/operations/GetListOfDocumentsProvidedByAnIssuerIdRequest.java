package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListOfDocumentsProvidedByAnIssuerIdRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public Object request;
    public GetListOfDocumentsProvidedByAnIssuerIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public GetListOfDocumentsProvidedByAnIssuerIdSecurity security;
    public GetListOfDocumentsProvidedByAnIssuerIdRequest withSecurity(GetListOfDocumentsProvidedByAnIssuerIdSecurity security) {
        this.security = security;
        return this;
    }
}