package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LoginRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LoginRequest request;
    public LoginRequest withRequest(openapisdk.models.shared.LoginRequest request) {
        this.request = request;
        return this;
    }
}