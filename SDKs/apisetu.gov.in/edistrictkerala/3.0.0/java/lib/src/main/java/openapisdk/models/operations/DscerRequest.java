package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DscerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DscerRequestBody request;
    public DscerRequest withRequest(DscerRequestBody request) {
        this.request = request;
        return this;
    }
    public DscerSecurity security;
    public DscerRequest withSecurity(DscerSecurity security) {
        this.security = security;
        return this;
    }
}