package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LcsagRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public LcsagRequestBody request;
    public LcsagRequest withRequest(LcsagRequestBody request) {
        this.request = request;
        return this;
    }
    public LcsagSecurity security;
    public LcsagRequest withSecurity(LcsagSecurity security) {
        this.security = security;
        return this;
    }
}