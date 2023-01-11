package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MncerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MncerRequestBody request;
    public MncerRequest withRequest(MncerRequestBody request) {
        this.request = request;
        return this;
    }
    public MncerSecurity security;
    public MncerRequest withSecurity(MncerSecurity security) {
        this.security = security;
        return this;
    }
}