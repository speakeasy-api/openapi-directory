package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchParametersForADocumentIdRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public Object request;
    public GetSearchParametersForADocumentIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public GetSearchParametersForADocumentIdSecurity security;
    public GetSearchParametersForADocumentIdRequest withSecurity(GetSearchParametersForADocumentIdSecurity security) {
        this.security = security;
        return this;
    }
}