package openapisdk.models.operations;



public class ActionsCreateRemoveTokenForRepoResponse {
    public String contentType;
    public ActionsCreateRemoveTokenForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsCreateRemoveTokenForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AuthenticationToken authenticationToken;
    public ActionsCreateRemoveTokenForRepoResponse withAuthenticationToken(openapisdk.models.shared.AuthenticationToken authenticationToken) {
        this.authenticationToken = authenticationToken;
        return this;
    }
}