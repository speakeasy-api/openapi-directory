package openapisdk.models.operations;



public class DeleteArtifactVersionMetaDataResponse {
    public String contentType;
    public DeleteArtifactVersionMetaDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DeleteArtifactVersionMetaDataResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DeleteArtifactVersionMetaDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}