package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RitinRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RitinRequestBody request;
    public RitinRequest withRequest(RitinRequestBody request) {
        this.request = request;
        return this;
    }
    public RitinSecurity security;
    public RitinRequest withSecurity(RitinSecurity security) {
        this.security = security;
        return this;
    }
}