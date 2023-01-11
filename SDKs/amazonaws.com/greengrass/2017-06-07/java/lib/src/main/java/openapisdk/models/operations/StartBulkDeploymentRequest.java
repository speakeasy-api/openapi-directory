package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartBulkDeploymentRequest {
    public StartBulkDeploymentHeaders headers;
    public StartBulkDeploymentRequest withHeaders(StartBulkDeploymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartBulkDeploymentRequestBody request;
    public StartBulkDeploymentRequest withRequest(StartBulkDeploymentRequestBody request) {
        this.request = request;
        return this;
    }
}