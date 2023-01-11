package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetJobsRequest {
    public BatchGetJobsHeaders headers;
    public BatchGetJobsRequest withHeaders(BatchGetJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetJobsRequest request;
    public BatchGetJobsRequest withRequest(openapisdk.models.shared.BatchGetJobsRequest request) {
        this.request = request;
        return this;
    }
}