package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRepositoryRequest {
    public CreateRepositoryHeaders headers;
    public CreateRepositoryRequest withHeaders(CreateRepositoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateRepositoryInput request;
    public CreateRepositoryRequest withRequest(openapisdk.models.shared.CreateRepositoryInput request) {
        this.request = request;
        return this;
    }
}