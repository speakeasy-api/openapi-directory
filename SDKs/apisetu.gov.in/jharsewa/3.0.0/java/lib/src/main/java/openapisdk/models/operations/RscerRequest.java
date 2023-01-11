package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RscerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RscerRequestBody request;
    public RscerRequest withRequest(RscerRequestBody request) {
        this.request = request;
        return this;
    }
    public RscerSecurity security;
    public RscerRequest withSecurity(RscerSecurity security) {
        this.security = security;
        return this;
    }
}