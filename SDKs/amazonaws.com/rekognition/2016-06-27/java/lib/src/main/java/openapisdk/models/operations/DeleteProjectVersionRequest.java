package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProjectVersionRequest {
    public DeleteProjectVersionHeaders headers;
    public DeleteProjectVersionRequest withHeaders(DeleteProjectVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteProjectVersionRequest request;
    public DeleteProjectVersionRequest withRequest(openapisdk.models.shared.DeleteProjectVersionRequest request) {
        this.request = request;
        return this;
    }
}