package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SicrdRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SicrdRequestBody request;
    public SicrdRequest withRequest(SicrdRequestBody request) {
        this.request = request;
        return this;
    }
    public SicrdSecurity security;
    public SicrdRequest withSecurity(SicrdSecurity security) {
        this.security = security;
        return this;
    }
}