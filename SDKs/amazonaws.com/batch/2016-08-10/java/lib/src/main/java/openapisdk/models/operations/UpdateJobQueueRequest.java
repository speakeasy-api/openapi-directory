package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateJobQueueRequest {
    public UpdateJobQueueHeaders headers;
    public UpdateJobQueueRequest withHeaders(UpdateJobQueueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateJobQueueRequestBody request;
    public UpdateJobQueueRequest withRequest(UpdateJobQueueRequestBody request) {
        this.request = request;
        return this;
    }
}