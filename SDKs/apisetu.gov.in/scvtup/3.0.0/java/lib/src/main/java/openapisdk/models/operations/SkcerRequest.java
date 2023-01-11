package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SkcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SkcerRequestBody request;
    public SkcerRequest withRequest(SkcerRequestBody request) {
        this.request = request;
        return this;
    }
    public SkcerSecurity security;
    public SkcerRequest withSecurity(SkcerSecurity security) {
        this.security = security;
        return this;
    }
}