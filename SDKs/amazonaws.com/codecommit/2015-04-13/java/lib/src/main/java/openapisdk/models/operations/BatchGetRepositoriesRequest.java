package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetRepositoriesRequest {
    public BatchGetRepositoriesHeaders headers;
    public BatchGetRepositoriesRequest withHeaders(BatchGetRepositoriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetRepositoriesInput request;
    public BatchGetRepositoriesRequest withRequest(openapisdk.models.shared.BatchGetRepositoriesInput request) {
        this.request = request;
        return this;
    }
}