package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RatcrRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RatcrRequestBody request;
    public RatcrRequest withRequest(RatcrRequestBody request) {
        this.request = request;
        return this;
    }
    public RatcrSecurity security;
    public RatcrRequest withSecurity(RatcrSecurity security) {
        this.security = security;
        return this;
    }
}