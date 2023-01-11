package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RucerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RucerRequestBody request;
    public RucerRequest withRequest(RucerRequestBody request) {
        this.request = request;
        return this;
    }
    public RucerSecurity security;
    public RucerRequest withSecurity(RucerSecurity security) {
        this.security = security;
        return this;
    }
}