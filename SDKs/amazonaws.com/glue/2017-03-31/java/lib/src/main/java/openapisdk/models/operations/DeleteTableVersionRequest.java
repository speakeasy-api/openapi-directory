package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTableVersionRequest {
    public DeleteTableVersionHeaders headers;
    public DeleteTableVersionRequest withHeaders(DeleteTableVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteTableVersionRequest request;
    public DeleteTableVersionRequest withRequest(openapisdk.models.shared.DeleteTableVersionRequest request) {
        this.request = request;
        return this;
    }
}