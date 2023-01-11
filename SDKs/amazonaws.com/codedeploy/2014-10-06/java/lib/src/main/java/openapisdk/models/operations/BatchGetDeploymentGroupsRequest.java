package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetDeploymentGroupsRequest {
    public BatchGetDeploymentGroupsHeaders headers;
    public BatchGetDeploymentGroupsRequest withHeaders(BatchGetDeploymentGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetDeploymentGroupsInput request;
    public BatchGetDeploymentGroupsRequest withRequest(openapisdk.models.shared.BatchGetDeploymentGroupsInput request) {
        this.request = request;
        return this;
    }
}