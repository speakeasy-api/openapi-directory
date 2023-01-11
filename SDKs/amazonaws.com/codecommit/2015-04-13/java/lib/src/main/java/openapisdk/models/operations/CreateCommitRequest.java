package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCommitRequest {
    public CreateCommitHeaders headers;
    public CreateCommitRequest withHeaders(CreateCommitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCommitInput request;
    public CreateCommitRequest withRequest(openapisdk.models.shared.CreateCommitInput request) {
        this.request = request;
        return this;
    }
}