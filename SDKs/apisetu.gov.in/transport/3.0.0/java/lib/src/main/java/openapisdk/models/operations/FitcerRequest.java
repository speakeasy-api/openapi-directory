package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FitcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public FitcerRequestBody request;
    public FitcerRequest withRequest(FitcerRequestBody request) {
        this.request = request;
        return this;
    }
    public FitcerSecurity security;
    public FitcerRequest withSecurity(FitcerSecurity security) {
        this.security = security;
        return this;
    }
}