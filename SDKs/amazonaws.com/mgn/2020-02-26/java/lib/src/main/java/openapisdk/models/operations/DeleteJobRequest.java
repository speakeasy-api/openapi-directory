package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteJobRequest {
    public DeleteJobHeaders headers;
    public DeleteJobRequest withHeaders(DeleteJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteJobRequestBody request;
    public DeleteJobRequest withRequest(DeleteJobRequestBody request) {
        this.request = request;
        return this;
    }
}