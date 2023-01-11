package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthenticateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AuthenticateAuthentication request;
    public AuthenticateRequest withRequest(AuthenticateAuthentication request) {
        this.request = request;
        return this;
    }
}