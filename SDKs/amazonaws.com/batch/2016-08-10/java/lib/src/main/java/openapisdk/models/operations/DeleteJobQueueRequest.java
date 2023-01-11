package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteJobQueueRequest {
    public DeleteJobQueueHeaders headers;
    public DeleteJobQueueRequest withHeaders(DeleteJobQueueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteJobQueueRequestBody request;
    public DeleteJobQueueRequest withRequest(DeleteJobQueueRequestBody request) {
        this.request = request;
        return this;
    }
}