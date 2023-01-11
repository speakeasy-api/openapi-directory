package openapisdk.models.operations;



public class GetScoreCollaboratorResponse {
    public String contentType;
    public GetScoreCollaboratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public GetScoreCollaboratorResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ResourceCollaborator resourceCollaborator;
    public GetScoreCollaboratorResponse withResourceCollaborator(openapisdk.models.shared.ResourceCollaborator resourceCollaborator) {
        this.resourceCollaborator = resourceCollaborator;
        return this;
    }
    public Long statusCode;
    public GetScoreCollaboratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}