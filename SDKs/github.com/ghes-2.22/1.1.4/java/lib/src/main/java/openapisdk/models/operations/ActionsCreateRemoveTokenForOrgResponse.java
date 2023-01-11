package openapisdk.models.operations;



public class ActionsCreateRemoveTokenForOrgResponse {
    public String contentType;
    public ActionsCreateRemoveTokenForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsCreateRemoveTokenForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AuthenticationToken authenticationToken;
    public ActionsCreateRemoveTokenForOrgResponse withAuthenticationToken(openapisdk.models.shared.AuthenticationToken authenticationToken) {
        this.authenticationToken = authenticationToken;
        return this;
    }
}