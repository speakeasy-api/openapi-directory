package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteModelRequest {
    public DeleteModelHeaders headers;
    public DeleteModelRequest withHeaders(DeleteModelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteModelRequest request;
    public DeleteModelRequest withRequest(openapisdk.models.shared.DeleteModelRequest request) {
        this.request = request;
        return this;
    }
}