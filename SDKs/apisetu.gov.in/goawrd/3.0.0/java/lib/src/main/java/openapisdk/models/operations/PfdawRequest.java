package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PfdawRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PfdawRequestBody request;
    public PfdawRequest withRequest(PfdawRequestBody request) {
        this.request = request;
        return this;
    }
    public PfdawSecurity security;
    public PfdawRequest withSecurity(PfdawSecurity security) {
        this.security = security;
        return this;
    }
}