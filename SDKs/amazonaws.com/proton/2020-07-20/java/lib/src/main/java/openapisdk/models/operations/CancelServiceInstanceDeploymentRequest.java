package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelServiceInstanceDeploymentRequest {
    public CancelServiceInstanceDeploymentHeaders headers;
    public CancelServiceInstanceDeploymentRequest withHeaders(CancelServiceInstanceDeploymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CancelServiceInstanceDeploymentInput request;
    public CancelServiceInstanceDeploymentRequest withRequest(openapisdk.models.shared.CancelServiceInstanceDeploymentInput request) {
        this.request = request;
        return this;
    }
}