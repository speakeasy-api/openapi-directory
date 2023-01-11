package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PncerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PncerRequestBody request;
    public PncerRequest withRequest(PncerRequestBody request) {
        this.request = request;
        return this;
    }
    public PncerSecurity security;
    public PncerRequest withSecurity(PncerSecurity security) {
        this.security = security;
        return this;
    }
}