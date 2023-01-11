package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateArtifactMetaDataRequest {
    public UpdateArtifactMetaDataPathParams pathParams;
    public UpdateArtifactMetaDataRequest withPathParams(UpdateArtifactMetaDataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=*/*")
    public byte[] request;
    public UpdateArtifactMetaDataRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}