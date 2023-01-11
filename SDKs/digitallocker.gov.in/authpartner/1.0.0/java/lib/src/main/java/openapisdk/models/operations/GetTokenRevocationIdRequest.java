package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTokenRevocationIdRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetTokenRevocationIdRequestBody request;
    public GetTokenRevocationIdRequest withRequest(GetTokenRevocationIdRequestBody request) {
        this.request = request;
        return this;
    }
    public GetTokenRevocationIdSecurity security;
    public GetTokenRevocationIdRequest withSecurity(GetTokenRevocationIdSecurity security) {
        this.security = security;
        return this;
    }
}