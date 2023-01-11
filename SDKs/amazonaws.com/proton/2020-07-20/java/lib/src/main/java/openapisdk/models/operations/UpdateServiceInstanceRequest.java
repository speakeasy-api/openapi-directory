package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceInstanceRequest {
    public UpdateServiceInstanceHeaders headers;
    public UpdateServiceInstanceRequest withHeaders(UpdateServiceInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateServiceInstanceInput request;
    public UpdateServiceInstanceRequest withRequest(openapisdk.models.shared.UpdateServiceInstanceInput request) {
        this.request = request;
        return this;
    }
}