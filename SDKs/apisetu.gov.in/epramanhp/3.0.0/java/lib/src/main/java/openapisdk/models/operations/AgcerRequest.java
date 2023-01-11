package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AgcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AgcerRequestBody request;
    public AgcerRequest withRequest(AgcerRequestBody request) {
        this.request = request;
        return this;
    }
    public AgcerSecurity security;
    public AgcerRequest withSecurity(AgcerSecurity security) {
        this.security = security;
        return this;
    }
}