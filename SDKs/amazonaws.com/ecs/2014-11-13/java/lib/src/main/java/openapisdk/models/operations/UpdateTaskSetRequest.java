package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskSetRequest {
    public UpdateTaskSetHeaders headers;
    public UpdateTaskSetRequest withHeaders(UpdateTaskSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateTaskSetRequest request;
    public UpdateTaskSetRequest withRequest(openapisdk.models.shared.UpdateTaskSetRequest request) {
        this.request = request;
        return this;
    }
}