package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterRequest request;
    public RegisterRequest withRequest(openapisdk.models.shared.RegisterRequest request) {
        this.request = request;
        return this;
    }
}