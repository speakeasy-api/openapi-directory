package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoryRequest {
    public GetRepositoryHeaders headers;
    public GetRepositoryRequest withHeaders(GetRepositoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRepositoryInput request;
    public GetRepositoryRequest withRequest(openapisdk.models.shared.GetRepositoryInput request) {
        this.request = request;
        return this;
    }
}