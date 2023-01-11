package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetBuildBatchesRequest {
    public BatchGetBuildBatchesHeaders headers;
    public BatchGetBuildBatchesRequest withHeaders(BatchGetBuildBatchesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetBuildBatchesInput request;
    public BatchGetBuildBatchesRequest withRequest(openapisdk.models.shared.BatchGetBuildBatchesInput request) {
        this.request = request;
        return this;
    }
}