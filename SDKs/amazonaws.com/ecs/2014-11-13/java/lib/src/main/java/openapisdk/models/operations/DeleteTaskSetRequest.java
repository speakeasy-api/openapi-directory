package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTaskSetRequest {
    public DeleteTaskSetHeaders headers;
    public DeleteTaskSetRequest withHeaders(DeleteTaskSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteTaskSetRequest request;
    public DeleteTaskSetRequest withRequest(openapisdk.models.shared.DeleteTaskSetRequest request) {
        this.request = request;
        return this;
    }
}