package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProjectRequest {
    public DeleteProjectHeaders headers;
    public DeleteProjectRequest withHeaders(DeleteProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteProjectRequest request;
    public DeleteProjectRequest withRequest(openapisdk.models.shared.DeleteProjectRequest request) {
        this.request = request;
        return this;
    }
}