package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateArtifactRequest {
    public UpdateArtifactPathParams pathParams;
    public UpdateArtifactRequest withPathParams(UpdateArtifactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateArtifactHeaders headers;
    public UpdateArtifactRequest withHeaders(UpdateArtifactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=*/*")
    public byte[] request;
    public UpdateArtifactRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}