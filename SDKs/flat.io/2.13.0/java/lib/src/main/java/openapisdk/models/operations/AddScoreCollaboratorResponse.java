package openapisdk.models.operations;



public class AddScoreCollaboratorResponse {
    public String contentType;
    public AddScoreCollaboratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public AddScoreCollaboratorResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ResourceCollaborator resourceCollaborator;
    public AddScoreCollaboratorResponse withResourceCollaborator(openapisdk.models.shared.ResourceCollaborator resourceCollaborator) {
        this.resourceCollaborator = resourceCollaborator;
        return this;
    }
    public Long statusCode;
    public AddScoreCollaboratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}