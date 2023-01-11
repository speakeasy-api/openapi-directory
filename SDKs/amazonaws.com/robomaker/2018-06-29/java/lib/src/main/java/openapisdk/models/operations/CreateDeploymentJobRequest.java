package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeploymentJobRequest {
    public CreateDeploymentJobHeaders headers;
    public CreateDeploymentJobRequest withHeaders(CreateDeploymentJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDeploymentJobRequestBody request;
    public CreateDeploymentJobRequest withRequest(CreateDeploymentJobRequestBody request) {
        this.request = request;
        return this;
    }
}