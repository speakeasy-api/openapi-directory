package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public LicerRequestBody request;
    public LicerRequest withRequest(LicerRequestBody request) {
        this.request = request;
        return this;
    }
    public LicerSecurity security;
    public LicerRequest withSecurity(LicerSecurity security) {
        this.security = security;
        return this;
    }
}