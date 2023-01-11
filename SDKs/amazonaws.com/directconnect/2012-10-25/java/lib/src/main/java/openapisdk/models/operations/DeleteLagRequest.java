package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLagRequest {
    public DeleteLagHeaders headers;
    public DeleteLagRequest withHeaders(DeleteLagHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteLagRequest request;
    public DeleteLagRequest withRequest(openapisdk.models.shared.DeleteLagRequest request) {
        this.request = request;
        return this;
    }
}