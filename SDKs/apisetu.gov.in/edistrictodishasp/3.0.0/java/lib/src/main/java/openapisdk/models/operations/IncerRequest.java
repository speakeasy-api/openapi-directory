package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IncerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public IncerRequestBody request;
    public IncerRequest withRequest(IncerRequestBody request) {
        this.request = request;
        return this;
    }
    public IncerSecurity security;
    public IncerRequest withSecurity(IncerSecurity security) {
        this.security = security;
        return this;
    }
}