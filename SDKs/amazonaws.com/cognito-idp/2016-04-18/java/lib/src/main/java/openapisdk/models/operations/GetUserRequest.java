package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserRequest {
    public GetUserHeaders headers;
    public GetUserRequest withHeaders(GetUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetUserRequest request;
    public GetUserRequest withRequest(openapisdk.models.shared.GetUserRequest request) {
        this.request = request;
        return this;
    }
}