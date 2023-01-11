package openapisdk.models.operations;



public class ActionsCreateRegistrationTokenForOrgResponse {
    public String contentType;
    public ActionsCreateRegistrationTokenForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsCreateRegistrationTokenForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AuthenticationToken authenticationToken;
    public ActionsCreateRegistrationTokenForOrgResponse withAuthenticationToken(openapisdk.models.shared.AuthenticationToken authenticationToken) {
        this.authenticationToken = authenticationToken;
        return this;
    }
}