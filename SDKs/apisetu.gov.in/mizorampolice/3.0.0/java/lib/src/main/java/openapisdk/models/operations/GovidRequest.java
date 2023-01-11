package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GovidRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GovidRequestBody request;
    public GovidRequest withRequest(GovidRequestBody request) {
        this.request = request;
        return this;
    }
    public GovidSecurity security;
    public GovidRequest withSecurity(GovidSecurity security) {
        this.security = security;
        return this;
    }
}