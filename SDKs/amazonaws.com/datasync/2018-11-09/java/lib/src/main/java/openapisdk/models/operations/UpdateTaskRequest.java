package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskRequest {
    public UpdateTaskHeaders headers;
    public UpdateTaskRequest withHeaders(UpdateTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateTaskRequest request;
    public UpdateTaskRequest withRequest(openapisdk.models.shared.UpdateTaskRequest request) {
        this.request = request;
        return this;
    }
}