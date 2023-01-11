package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMlModelRequest {
    public DeleteMlModelHeaders headers;
    public DeleteMlModelRequest withHeaders(DeleteMlModelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteMlModelInput request;
    public DeleteMlModelRequest withRequest(openapisdk.models.shared.DeleteMlModelInput request) {
        this.request = request;
        return this;
    }
}