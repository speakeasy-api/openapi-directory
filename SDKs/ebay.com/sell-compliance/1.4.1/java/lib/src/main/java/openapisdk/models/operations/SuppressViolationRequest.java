package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SuppressViolationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SuppressViolationRequest request;
    public SuppressViolationRequest withRequest(openapisdk.models.shared.SuppressViolationRequest request) {
        this.request = request;
        return this;
    }
    public SuppressViolationSecurity security;
    public SuppressViolationRequest withSecurity(SuppressViolationSecurity security) {
        this.security = security;
        return this;
    }
}