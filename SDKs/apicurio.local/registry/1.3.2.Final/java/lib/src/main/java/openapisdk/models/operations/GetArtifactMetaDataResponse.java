package openapisdk.models.operations;



public class GetArtifactMetaDataResponse {
    public openapisdk.models.shared.ArtifactMetaData artifactMetaData;
    public GetArtifactMetaDataResponse withArtifactMetaData(openapisdk.models.shared.ArtifactMetaData artifactMetaData) {
        this.artifactMetaData = artifactMetaData;
        return this;
    }
    public String contentType;
    public GetArtifactMetaDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetArtifactMetaDataResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetArtifactMetaDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}