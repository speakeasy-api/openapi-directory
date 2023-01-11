package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LpgtvRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public LpgtvRequestBody request;
    public LpgtvRequest withRequest(LpgtvRequestBody request) {
        this.request = request;
        return this;
    }
    public LpgtvSecurity security;
    public LpgtvRequest withSecurity(LpgtvSecurity security) {
        this.security = security;
        return this;
    }
}