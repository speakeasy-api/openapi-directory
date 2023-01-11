package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLunaClientRequest {
    public DeleteLunaClientHeaders headers;
    public DeleteLunaClientRequest withHeaders(DeleteLunaClientHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteLunaClientRequest request;
    public DeleteLunaClientRequest withRequest(openapisdk.models.shared.DeleteLunaClientRequest request) {
        this.request = request;
        return this;
    }
}