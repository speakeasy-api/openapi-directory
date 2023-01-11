package openapisdk.models.operations;



public class ReposListInvitationsForAuthenticatedUserResponse {
    public String contentType;
    public ReposListInvitationsForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListInvitationsForAuthenticatedUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListInvitationsForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposListInvitationsForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.RepositoryInvitation[] repositoryInvitations;
    public ReposListInvitationsForAuthenticatedUserResponse withRepositoryInvitations(openapisdk.models.shared.RepositoryInvitation[] repositoryInvitations) {
        this.repositoryInvitations = repositoryInvitations;
        return this;
    }
}