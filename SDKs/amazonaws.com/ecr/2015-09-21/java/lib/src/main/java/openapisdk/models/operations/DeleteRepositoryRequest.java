package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRepositoryRequest {
    public DeleteRepositoryHeaders headers;
    public DeleteRepositoryRequest withHeaders(DeleteRepositoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteRepositoryRequest request;
    public DeleteRepositoryRequest withRequest(openapisdk.models.shared.DeleteRepositoryRequest request) {
        this.request = request;
        return this;
    }
}