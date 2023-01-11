package openapisdk.models.operations;



public class CreateArtifactVersionResponse {
    public String contentType;
    public CreateArtifactVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public CreateArtifactVersionResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CreateArtifactVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VersionMetaData versionMetaData;
    public CreateArtifactVersionResponse withVersionMetaData(openapisdk.models.shared.VersionMetaData versionMetaData) {
        this.versionMetaData = versionMetaData;
        return this;
    }
}