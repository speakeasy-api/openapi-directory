package openapisdk.models.operations;



public class UpdateArtifactVersionStateResponse {
    public String contentType;
    public UpdateArtifactVersionStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdateArtifactVersionStateResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public UpdateArtifactVersionStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}