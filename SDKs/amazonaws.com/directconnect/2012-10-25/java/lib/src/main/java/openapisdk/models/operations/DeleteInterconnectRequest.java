package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteInterconnectRequest {
    public DeleteInterconnectHeaders headers;
    public DeleteInterconnectRequest withHeaders(DeleteInterconnectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteInterconnectRequest request;
    public DeleteInterconnectRequest withRequest(openapisdk.models.shared.DeleteInterconnectRequest request) {
        this.request = request;
        return this;
    }
}