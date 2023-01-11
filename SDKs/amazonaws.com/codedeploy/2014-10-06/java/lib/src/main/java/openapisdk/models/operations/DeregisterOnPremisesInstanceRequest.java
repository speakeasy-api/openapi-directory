package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterOnPremisesInstanceRequest {
    public DeregisterOnPremisesInstanceHeaders headers;
    public DeregisterOnPremisesInstanceRequest withHeaders(DeregisterOnPremisesInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeregisterOnPremisesInstanceInput request;
    public DeregisterOnPremisesInstanceRequest withRequest(openapisdk.models.shared.DeregisterOnPremisesInstanceInput request) {
        this.request = request;
        return this;
    }
}