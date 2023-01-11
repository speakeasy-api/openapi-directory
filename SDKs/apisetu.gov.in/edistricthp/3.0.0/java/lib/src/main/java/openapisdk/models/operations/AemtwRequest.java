package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AemtwRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AemtwRequestBody request;
    public AemtwRequest withRequest(AemtwRequestBody request) {
        this.request = request;
        return this;
    }
    public AemtwSecurity security;
    public AemtwRequest withSecurity(AemtwSecurity security) {
        this.security = security;
        return this;
    }
}