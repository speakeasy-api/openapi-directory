package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetDeploymentsRequest {
    public BatchGetDeploymentsHeaders headers;
    public BatchGetDeploymentsRequest withHeaders(BatchGetDeploymentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetDeploymentsInput request;
    public BatchGetDeploymentsRequest withRequest(openapisdk.models.shared.BatchGetDeploymentsInput request) {
        this.request = request;
        return this;
    }
}