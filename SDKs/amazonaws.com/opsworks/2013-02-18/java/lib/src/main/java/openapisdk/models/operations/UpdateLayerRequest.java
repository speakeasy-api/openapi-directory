package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLayerRequest {
    public UpdateLayerHeaders headers;
    public UpdateLayerRequest withHeaders(UpdateLayerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateLayerRequest request;
    public UpdateLayerRequest withRequest(openapisdk.models.shared.UpdateLayerRequest request) {
        this.request = request;
        return this;
    }
}