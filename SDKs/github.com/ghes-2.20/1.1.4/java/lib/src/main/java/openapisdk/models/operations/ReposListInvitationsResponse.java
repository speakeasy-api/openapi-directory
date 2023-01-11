package openapisdk.models.operations;



public class ReposListInvitationsResponse {
    public String contentType;
    public ReposListInvitationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListInvitationsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListInvitationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RepositoryInvitation[] repositoryInvitations;
    public ReposListInvitationsResponse withRepositoryInvitations(openapisdk.models.shared.RepositoryInvitation[] repositoryInvitations) {
        this.repositoryInvitations = repositoryInvitations;
        return this;
    }
}