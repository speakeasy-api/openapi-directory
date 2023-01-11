package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableUserRequest {
    public EnableUserHeaders headers;
    public EnableUserRequest withHeaders(EnableUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnableUserRequest request;
    public EnableUserRequest withRequest(openapisdk.models.shared.EnableUserRequest request) {
        this.request = request;
        return this;
    }
}