package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsCreateRequestBody request;
    public TeamsCreateRequest withRequest(TeamsCreateRequestBody request) {
        this.request = request;
        return this;
    }
    public TeamsCreateSecurity security;
    public TeamsCreateRequest withSecurity(TeamsCreateSecurity security) {
        this.security = security;
        return this;
    }
}