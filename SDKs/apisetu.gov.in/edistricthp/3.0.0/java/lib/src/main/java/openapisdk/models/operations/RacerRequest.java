package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RacerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RacerRequestBody request;
    public RacerRequest withRequest(RacerRequestBody request) {
        this.request = request;
        return this;
    }
    public RacerSecurity security;
    public RacerRequest withSecurity(RacerSecurity security) {
        this.security = security;
        return this;
    }
}