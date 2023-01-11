package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetArtifactMetaDataByContentRequest {
    public GetArtifactMetaDataByContentPathParams pathParams;
    public GetArtifactMetaDataByContentRequest withPathParams(GetArtifactMetaDataByContentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public byte[] request;
    public GetArtifactMetaDataByContentRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}