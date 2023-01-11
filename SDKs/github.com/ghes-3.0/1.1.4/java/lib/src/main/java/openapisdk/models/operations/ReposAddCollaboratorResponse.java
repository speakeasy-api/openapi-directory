package openapisdk.models.operations;



public class ReposAddCollaboratorResponse {
    public String contentType;
    public ReposAddCollaboratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposAddCollaboratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposAddCollaboratorResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.RepositoryInvitation repositoryInvitation;
    public ReposAddCollaboratorResponse withRepositoryInvitation(openapisdk.models.shared.RepositoryInvitation repositoryInvitation) {
        this.repositoryInvitation = repositoryInvitation;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposAddCollaboratorResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}