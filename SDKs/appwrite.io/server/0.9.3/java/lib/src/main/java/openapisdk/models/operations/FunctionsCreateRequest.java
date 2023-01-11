package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FunctionsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public FunctionsCreateRequestBody request;
    public FunctionsCreateRequest withRequest(FunctionsCreateRequestBody request) {
        this.request = request;
        return this;
    }
    public FunctionsCreateSecurity security;
    public FunctionsCreateRequest withSecurity(FunctionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}