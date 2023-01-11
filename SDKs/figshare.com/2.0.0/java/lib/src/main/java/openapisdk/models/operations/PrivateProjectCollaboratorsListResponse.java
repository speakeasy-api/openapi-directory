package openapisdk.models.operations;



public class PrivateProjectCollaboratorsListResponse {
    public String contentType;
    public PrivateProjectCollaboratorsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateProjectCollaboratorsListResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.ProjectCollaborator[] projectCollaborators;
    public PrivateProjectCollaboratorsListResponse withProjectCollaborators(openapisdk.models.shared.ProjectCollaborator[] projectCollaborators) {
        this.projectCollaborators = projectCollaborators;
        return this;
    }
    public Long statusCode;
    public PrivateProjectCollaboratorsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}