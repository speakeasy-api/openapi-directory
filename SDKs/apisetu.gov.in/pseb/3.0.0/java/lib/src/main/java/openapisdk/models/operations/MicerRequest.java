package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MicerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MicerRequestBody request;
    public MicerRequest withRequest(MicerRequestBody request) {
        this.request = request;
        return this;
    }
    public MicerSecurity security;
    public MicerRequest withSecurity(MicerSecurity security) {
        this.security = security;
        return this;
    }
}