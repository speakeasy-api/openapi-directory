package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetProjectsRequest {
    public BatchGetProjectsHeaders headers;
    public BatchGetProjectsRequest withHeaders(BatchGetProjectsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetProjectsInput request;
    public BatchGetProjectsRequest withRequest(openapisdk.models.shared.BatchGetProjectsInput request) {
        this.request = request;
        return this;
    }
}