package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrfndRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PrfndRequestBody request;
    public PrfndRequest withRequest(PrfndRequestBody request) {
        this.request = request;
        return this;
    }
    public PrfndSecurity security;
    public PrfndRequest withSecurity(PrfndSecurity security) {
        this.security = security;
        return this;
    }
}