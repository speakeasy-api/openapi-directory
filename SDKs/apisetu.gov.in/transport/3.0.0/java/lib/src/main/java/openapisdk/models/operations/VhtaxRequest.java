package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VhtaxRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public VhtaxRequestBody request;
    public VhtaxRequest withRequest(VhtaxRequestBody request) {
        this.request = request;
        return this;
    }
    public VhtaxSecurity security;
    public VhtaxRequest withSecurity(VhtaxSecurity security) {
        this.security = security;
        return this;
    }
}