package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DncerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DncerRequestBody request;
    public DncerRequest withRequest(DncerRequestBody request) {
        this.request = request;
        return this;
    }
    public DncerSecurity security;
    public DncerRequest withSecurity(DncerSecurity security) {
        this.security = security;
        return this;
    }
}