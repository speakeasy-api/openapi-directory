package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateArtifactRequest {
    public CreateArtifactPathParams pathParams;
    public CreateArtifactRequest withPathParams(CreateArtifactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateArtifactQueryParams queryParams;
    public CreateArtifactRequest withQueryParams(CreateArtifactQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateArtifactHeaders headers;
    public CreateArtifactRequest withHeaders(CreateArtifactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=*/*")
    public byte[] request;
    public CreateArtifactRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}