package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTaskRequest {
    public DeleteTaskHeaders headers;
    public DeleteTaskRequest withHeaders(DeleteTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteTaskRequest request;
    public DeleteTaskRequest withRequest(openapisdk.models.shared.DeleteTaskRequest request) {
        this.request = request;
        return this;
    }
}