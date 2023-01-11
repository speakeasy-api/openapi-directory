package openapisdk.models.operations;



public class UpdateArtifactMetaDataResponse {
    public String contentType;
    public UpdateArtifactMetaDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdateArtifactMetaDataResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public UpdateArtifactMetaDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}