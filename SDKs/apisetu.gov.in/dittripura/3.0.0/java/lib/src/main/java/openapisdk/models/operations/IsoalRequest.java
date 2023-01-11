package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IsoalRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public IsoalRequestBody request;
    public IsoalRequest withRequest(IsoalRequestBody request) {
        this.request = request;
        return this;
    }
    public IsoalSecurity security;
    public IsoalRequest withSecurity(IsoalSecurity security) {
        this.security = security;
        return this;
    }
}