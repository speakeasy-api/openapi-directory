package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TpcerRequestBody request;
    public TpcerRequest withRequest(TpcerRequestBody request) {
        this.request = request;
        return this;
    }
    public TpcerSecurity security;
    public TpcerRequest withSecurity(TpcerSecurity security) {
        this.security = security;
        return this;
    }
}