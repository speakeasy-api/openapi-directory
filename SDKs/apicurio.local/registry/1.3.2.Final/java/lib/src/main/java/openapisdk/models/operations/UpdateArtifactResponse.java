package openapisdk.models.operations;



public class UpdateArtifactResponse {
    public openapisdk.models.shared.ArtifactMetaData artifactMetaData;
    public UpdateArtifactResponse withArtifactMetaData(openapisdk.models.shared.ArtifactMetaData artifactMetaData) {
        this.artifactMetaData = artifactMetaData;
        return this;
    }
    public String contentType;
    public UpdateArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdateArtifactResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public UpdateArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}