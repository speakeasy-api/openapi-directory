package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HscerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public HscerRequestBody request;
    public HscerRequest withRequest(HscerRequestBody request) {
        this.request = request;
        return this;
    }
    public HscerSecurity security;
    public HscerRequest withSecurity(HscerSecurity security) {
        this.security = security;
        return this;
    }
}