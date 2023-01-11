package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterInstanceRequest {
    public DeregisterInstanceHeaders headers;
    public DeregisterInstanceRequest withHeaders(DeregisterInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeregisterInstanceRequest request;
    public DeregisterInstanceRequest withRequest(openapisdk.models.shared.DeregisterInstanceRequest request) {
        this.request = request;
        return this;
    }
}