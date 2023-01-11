package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SyncDeploymentJobRequest {
    public SyncDeploymentJobHeaders headers;
    public SyncDeploymentJobRequest withHeaders(SyncDeploymentJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SyncDeploymentJobRequestBody request;
    public SyncDeploymentJobRequest withRequest(SyncDeploymentJobRequestBody request) {
        this.request = request;
        return this;
    }
}