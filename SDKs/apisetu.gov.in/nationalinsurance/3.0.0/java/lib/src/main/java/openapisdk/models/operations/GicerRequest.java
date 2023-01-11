package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GicerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GicerRequestBody request;
    public GicerRequest withRequest(GicerRequestBody request) {
        this.request = request;
        return this;
    }
    public GicerSecurity security;
    public GicerRequest withSecurity(GicerSecurity security) {
        this.security = security;
        return this;
    }
}