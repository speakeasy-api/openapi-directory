package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConnectionRequest {
    public DeleteConnectionHeaders headers;
    public DeleteConnectionRequest withHeaders(DeleteConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteConnectionInput request;
    public DeleteConnectionRequest withRequest(openapisdk.models.shared.DeleteConnectionInput request) {
        this.request = request;
        return this;
    }
}