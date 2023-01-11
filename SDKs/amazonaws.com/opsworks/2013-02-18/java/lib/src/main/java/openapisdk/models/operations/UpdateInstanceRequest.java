package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInstanceRequest {
    public UpdateInstanceHeaders headers;
    public UpdateInstanceRequest withHeaders(UpdateInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateInstanceRequest request;
    public UpdateInstanceRequest withRequest(openapisdk.models.shared.UpdateInstanceRequest request) {
        this.request = request;
        return this;
    }
}