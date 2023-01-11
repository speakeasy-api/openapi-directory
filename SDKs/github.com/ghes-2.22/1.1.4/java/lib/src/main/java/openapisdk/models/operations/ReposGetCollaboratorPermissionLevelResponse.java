package openapisdk.models.operations;



public class ReposGetCollaboratorPermissionLevelResponse {
    public String contentType;
    public ReposGetCollaboratorPermissionLevelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetCollaboratorPermissionLevelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetCollaboratorPermissionLevelResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.RepositoryCollaboratorPermission repositoryCollaboratorPermission;
    public ReposGetCollaboratorPermissionLevelResponse withRepositoryCollaboratorPermission(openapisdk.models.shared.RepositoryCollaboratorPermission repositoryCollaboratorPermission) {
        this.repositoryCollaboratorPermission = repositoryCollaboratorPermission;
        return this;
    }
}