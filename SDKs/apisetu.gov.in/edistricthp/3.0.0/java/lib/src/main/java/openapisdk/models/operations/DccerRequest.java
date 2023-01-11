package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DccerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DccerRequestBody request;
    public DccerRequest withRequest(DccerRequestBody request) {
        this.request = request;
        return this;
    }
    public DccerSecurity security;
    public DccerRequest withSecurity(DccerSecurity security) {
        this.security = security;
        return this;
    }
}