package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlimwRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AlimwRequestBody request;
    public AlimwRequest withRequest(AlimwRequestBody request) {
        this.request = request;
        return this;
    }
    public AlimwSecurity security;
    public AlimwRequest withSecurity(AlimwSecurity security) {
        this.security = security;
        return this;
    }
}