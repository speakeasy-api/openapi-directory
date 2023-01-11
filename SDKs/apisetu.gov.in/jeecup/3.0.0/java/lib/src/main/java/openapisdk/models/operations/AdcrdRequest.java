package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdcrdRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AdcrdRequestBody request;
    public AdcrdRequest withRequest(AdcrdRequestBody request) {
        this.request = request;
        return this;
    }
    public AdcrdSecurity security;
    public AdcrdRequest withSecurity(AdcrdSecurity security) {
        this.security = security;
        return this;
    }
}