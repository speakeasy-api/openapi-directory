package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SicerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SicerRequestBody request;
    public SicerRequest withRequest(SicerRequestBody request) {
        this.request = request;
        return this;
    }
    public SicerSecurity security;
    public SicerRequest withSecurity(SicerSecurity security) {
        this.security = security;
        return this;
    }
}