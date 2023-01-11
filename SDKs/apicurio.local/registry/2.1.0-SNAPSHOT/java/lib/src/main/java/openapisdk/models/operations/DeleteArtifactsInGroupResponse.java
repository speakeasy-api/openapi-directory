package openapisdk.models.operations;



public class DeleteArtifactsInGroupResponse {
    public String contentType;
    public DeleteArtifactsInGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DeleteArtifactsInGroupResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DeleteArtifactsInGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}