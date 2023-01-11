package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UncrdRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UncrdRequestBody request;
    public UncrdRequest withRequest(UncrdRequestBody request) {
        this.request = request;
        return this;
    }
    public UncrdSecurity security;
    public UncrdRequest withSecurity(UncrdSecurity security) {
        this.security = security;
        return this;
    }
}