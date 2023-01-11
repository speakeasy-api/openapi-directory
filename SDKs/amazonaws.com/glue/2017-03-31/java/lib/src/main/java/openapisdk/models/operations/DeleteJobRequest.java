package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteJobRequest {
    public DeleteJobHeaders headers;
    public DeleteJobRequest withHeaders(DeleteJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteJobRequest request;
    public DeleteJobRequest withRequest(openapisdk.models.shared.DeleteJobRequest request) {
        this.request = request;
        return this;
    }
}