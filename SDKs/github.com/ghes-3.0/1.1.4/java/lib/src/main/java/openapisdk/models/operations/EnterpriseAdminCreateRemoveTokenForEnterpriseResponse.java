package openapisdk.models.operations;



public class EnterpriseAdminCreateRemoveTokenForEnterpriseResponse {
    public String contentType;
    public EnterpriseAdminCreateRemoveTokenForEnterpriseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminCreateRemoveTokenForEnterpriseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AuthenticationToken authenticationToken;
    public EnterpriseAdminCreateRemoveTokenForEnterpriseResponse withAuthenticationToken(openapisdk.models.shared.AuthenticationToken authenticationToken) {
        this.authenticationToken = authenticationToken;
        return this;
    }
}