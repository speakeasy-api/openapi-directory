package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBackendRequest {
    public CreateBackendHeaders headers;
    public CreateBackendRequest withHeaders(CreateBackendHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateBackendRequestBody request;
    public CreateBackendRequest withRequest(CreateBackendRequestBody request) {
        this.request = request;
        return this;
    }
}