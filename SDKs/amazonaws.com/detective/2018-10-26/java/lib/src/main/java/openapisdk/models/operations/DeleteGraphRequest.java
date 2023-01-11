package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGraphRequest {
    public DeleteGraphHeaders headers;
    public DeleteGraphRequest withHeaders(DeleteGraphHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteGraphRequestBody request;
    public DeleteGraphRequest withRequest(DeleteGraphRequestBody request) {
        this.request = request;
        return this;
    }
}