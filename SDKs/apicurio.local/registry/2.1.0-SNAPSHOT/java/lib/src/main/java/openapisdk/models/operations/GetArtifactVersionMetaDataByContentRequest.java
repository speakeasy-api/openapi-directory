package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetArtifactVersionMetaDataByContentRequest {
    public GetArtifactVersionMetaDataByContentPathParams pathParams;
    public GetArtifactVersionMetaDataByContentRequest withPathParams(GetArtifactVersionMetaDataByContentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetArtifactVersionMetaDataByContentQueryParams queryParams;
    public GetArtifactVersionMetaDataByContentRequest withQueryParams(GetArtifactVersionMetaDataByContentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=*/*")
    public byte[] request;
    public GetArtifactVersionMetaDataByContentRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}