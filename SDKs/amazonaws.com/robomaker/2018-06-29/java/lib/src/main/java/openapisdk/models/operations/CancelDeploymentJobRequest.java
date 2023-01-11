package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelDeploymentJobRequest {
    public CancelDeploymentJobHeaders headers;
    public CancelDeploymentJobRequest withHeaders(CancelDeploymentJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CancelDeploymentJobRequestBody request;
    public CancelDeploymentJobRequest withRequest(CancelDeploymentJobRequestBody request) {
        this.request = request;
        return this;
    }
}