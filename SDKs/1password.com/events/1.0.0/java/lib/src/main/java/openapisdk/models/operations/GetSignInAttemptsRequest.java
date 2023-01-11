package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSignInAttemptsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public GetSignInAttemptsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public GetSignInAttemptsSecurity security;
    public GetSignInAttemptsRequest withSecurity(GetSignInAttemptsSecurity security) {
        this.security = security;
        return this;
    }
}