package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateArtifactVersionRequest {
    public CreateArtifactVersionPathParams pathParams;
    public CreateArtifactVersionRequest withPathParams(CreateArtifactVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateArtifactVersionHeaders headers;
    public CreateArtifactVersionRequest withHeaders(CreateArtifactVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=*/*")
    public byte[] request;
    public CreateArtifactVersionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}