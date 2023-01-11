package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegriiRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RegriiRequestBody request;
    public RegriiRequest withRequest(RegriiRequestBody request) {
        this.request = request;
        return this;
    }
    public RegriiSecurity security;
    public RegriiRequest withSecurity(RegriiSecurity security) {
        this.security = security;
        return this;
    }
}