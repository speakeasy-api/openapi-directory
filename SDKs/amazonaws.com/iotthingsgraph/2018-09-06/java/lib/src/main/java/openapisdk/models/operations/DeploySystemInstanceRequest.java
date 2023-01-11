package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploySystemInstanceRequest {
    public DeploySystemInstanceHeaders headers;
    public DeploySystemInstanceRequest withHeaders(DeploySystemInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeploySystemInstanceRequest request;
    public DeploySystemInstanceRequest withRequest(openapisdk.models.shared.DeploySystemInstanceRequest request) {
        this.request = request;
        return this;
    }
}