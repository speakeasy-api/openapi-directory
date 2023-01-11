package openapisdk.models.operations;



public class ReposUpdateInvitationResponse {
    public String contentType;
    public ReposUpdateInvitationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposUpdateInvitationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RepositoryInvitation repositoryInvitation;
    public ReposUpdateInvitationResponse withRepositoryInvitation(openapisdk.models.shared.RepositoryInvitation repositoryInvitation) {
        this.repositoryInvitation = repositoryInvitation;
        return this;
    }
}