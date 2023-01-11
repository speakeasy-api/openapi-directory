package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetDeploymentInstancesRequest {
    public BatchGetDeploymentInstancesHeaders headers;
    public BatchGetDeploymentInstancesRequest withHeaders(BatchGetDeploymentInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetDeploymentInstancesInput request;
    public BatchGetDeploymentInstancesRequest withRequest(openapisdk.models.shared.BatchGetDeploymentInstancesInput request) {
        this.request = request;
        return this;
    }
}