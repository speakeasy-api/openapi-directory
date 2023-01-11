package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRepositoryNameRequest {
    public UpdateRepositoryNameHeaders headers;
    public UpdateRepositoryNameRequest withHeaders(UpdateRepositoryNameHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRepositoryNameInput request;
    public UpdateRepositoryNameRequest withRequest(openapisdk.models.shared.UpdateRepositoryNameInput request) {
        this.request = request;
        return this;
    }
}