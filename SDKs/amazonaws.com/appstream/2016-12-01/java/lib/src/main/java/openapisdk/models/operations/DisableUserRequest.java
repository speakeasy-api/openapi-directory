package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableUserRequest {
    public DisableUserHeaders headers;
    public DisableUserRequest withHeaders(DisableUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisableUserRequest request;
    public DisableUserRequest withRequest(openapisdk.models.shared.DisableUserRequest request) {
        this.request = request;
        return this;
    }
}