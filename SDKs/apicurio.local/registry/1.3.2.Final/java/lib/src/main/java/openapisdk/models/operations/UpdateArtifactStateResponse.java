package openapisdk.models.operations;



public class UpdateArtifactStateResponse {
    public String contentType;
    public UpdateArtifactStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdateArtifactStateResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public UpdateArtifactStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}