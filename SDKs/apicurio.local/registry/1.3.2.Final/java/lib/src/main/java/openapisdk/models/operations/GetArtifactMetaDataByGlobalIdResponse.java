package openapisdk.models.operations;



public class GetArtifactMetaDataByGlobalIdResponse {
    public openapisdk.models.shared.ArtifactMetaData artifactMetaData;
    public GetArtifactMetaDataByGlobalIdResponse withArtifactMetaData(openapisdk.models.shared.ArtifactMetaData artifactMetaData) {
        this.artifactMetaData = artifactMetaData;
        return this;
    }
    public String contentType;
    public GetArtifactMetaDataByGlobalIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetArtifactMetaDataByGlobalIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetArtifactMetaDataByGlobalIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}