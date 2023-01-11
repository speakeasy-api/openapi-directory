package openapisdk.models.operations;



public class EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse {
    public String contentType;
    public EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AuthenticationToken authenticationToken;
    public EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse withAuthenticationToken(openapisdk.models.shared.AuthenticationToken authenticationToken) {
        this.authenticationToken = authenticationToken;
        return this;
    }
}