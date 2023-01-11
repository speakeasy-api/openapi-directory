package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LpgsvRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public LpgsvRequestBody request;
    public LpgsvRequest withRequest(LpgsvRequestBody request) {
        this.request = request;
        return this;
    }
    public LpgsvSecurity security;
    public LpgsvRequest withSecurity(LpgsvSecurity security) {
        this.security = security;
        return this;
    }
}