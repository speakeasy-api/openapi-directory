package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteResourceConfigRequest {
    public DeleteResourceConfigHeaders headers;
    public DeleteResourceConfigRequest withHeaders(DeleteResourceConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteResourceConfigRequest request;
    public DeleteResourceConfigRequest withRequest(openapisdk.models.shared.DeleteResourceConfigRequest request) {
        this.request = request;
        return this;
    }
}