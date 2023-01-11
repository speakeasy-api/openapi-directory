package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRunRequest {
    public DeleteRunHeaders headers;
    public DeleteRunRequest withHeaders(DeleteRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteRunRequest request;
    public DeleteRunRequest withRequest(openapisdk.models.shared.DeleteRunRequest request) {
        this.request = request;
        return this;
    }
}