package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSourceServerRequest {
    public DeleteSourceServerHeaders headers;
    public DeleteSourceServerRequest withHeaders(DeleteSourceServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteSourceServerRequestBody request;
    public DeleteSourceServerRequest withRequest(DeleteSourceServerRequestBody request) {
        this.request = request;
        return this;
    }
}