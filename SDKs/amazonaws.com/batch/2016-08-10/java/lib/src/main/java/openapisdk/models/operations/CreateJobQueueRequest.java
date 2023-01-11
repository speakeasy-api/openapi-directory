package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateJobQueueRequest {
    public CreateJobQueueHeaders headers;
    public CreateJobQueueRequest withHeaders(CreateJobQueueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateJobQueueRequestBody request;
    public CreateJobQueueRequest withRequest(CreateJobQueueRequestBody request) {
        this.request = request;
        return this;
    }
}