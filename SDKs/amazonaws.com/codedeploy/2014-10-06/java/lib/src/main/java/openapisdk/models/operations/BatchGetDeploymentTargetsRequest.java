package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetDeploymentTargetsRequest {
    public BatchGetDeploymentTargetsHeaders headers;
    public BatchGetDeploymentTargetsRequest withHeaders(BatchGetDeploymentTargetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetDeploymentTargetsInput request;
    public BatchGetDeploymentTargetsRequest withRequest(openapisdk.models.shared.BatchGetDeploymentTargetsInput request) {
        this.request = request;
        return this;
    }
}