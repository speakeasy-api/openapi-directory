package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetCommitsRequest {
    public BatchGetCommitsHeaders headers;
    public BatchGetCommitsRequest withHeaders(BatchGetCommitsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetCommitsInput request;
    public BatchGetCommitsRequest withRequest(openapisdk.models.shared.BatchGetCommitsInput request) {
        this.request = request;
        return this;
    }
}