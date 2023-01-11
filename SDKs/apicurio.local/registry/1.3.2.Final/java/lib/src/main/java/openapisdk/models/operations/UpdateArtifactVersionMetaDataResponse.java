package openapisdk.models.operations;



public class UpdateArtifactVersionMetaDataResponse {
    public String contentType;
    public UpdateArtifactVersionMetaDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdateArtifactVersionMetaDataResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public UpdateArtifactVersionMetaDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}