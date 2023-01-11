package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteResourceTreeRequest {
    public DeleteResourceTreeHeaders headers;
    public DeleteResourceTreeRequest withHeaders(DeleteResourceTreeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteResourceTreeRequest request;
    public DeleteResourceTreeRequest withRequest(openapisdk.models.shared.DeleteResourceTreeRequest request) {
        this.request = request;
        return this;
    }
}