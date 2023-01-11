package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLayerRequest {
    public CreateLayerHeaders headers;
    public CreateLayerRequest withHeaders(CreateLayerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLayerRequest request;
    public CreateLayerRequest withRequest(openapisdk.models.shared.CreateLayerRequest request) {
        this.request = request;
        return this;
    }
}