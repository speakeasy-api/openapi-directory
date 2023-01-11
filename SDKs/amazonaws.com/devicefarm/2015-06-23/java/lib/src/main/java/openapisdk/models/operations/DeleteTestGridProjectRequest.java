package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTestGridProjectRequest {
    public DeleteTestGridProjectHeaders headers;
    public DeleteTestGridProjectRequest withHeaders(DeleteTestGridProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteTestGridProjectRequest request;
    public DeleteTestGridProjectRequest withRequest(openapisdk.models.shared.DeleteTestGridProjectRequest request) {
        this.request = request;
        return this;
    }
}