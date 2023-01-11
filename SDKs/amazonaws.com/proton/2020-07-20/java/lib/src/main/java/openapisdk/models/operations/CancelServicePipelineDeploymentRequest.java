package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelServicePipelineDeploymentRequest {
    public CancelServicePipelineDeploymentHeaders headers;
    public CancelServicePipelineDeploymentRequest withHeaders(CancelServicePipelineDeploymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CancelServicePipelineDeploymentInput request;
    public CancelServicePipelineDeploymentRequest withRequest(openapisdk.models.shared.CancelServicePipelineDeploymentInput request) {
        this.request = request;
        return this;
    }
}