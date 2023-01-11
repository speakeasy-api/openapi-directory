package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLayerRequest {
    public DeleteLayerHeaders headers;
    public DeleteLayerRequest withHeaders(DeleteLayerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteLayerRequest request;
    public DeleteLayerRequest withRequest(openapisdk.models.shared.DeleteLayerRequest request) {
        this.request = request;
        return this;
    }
}