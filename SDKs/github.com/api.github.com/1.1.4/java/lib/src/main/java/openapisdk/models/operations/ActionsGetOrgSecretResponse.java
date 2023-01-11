package openapisdk.models.operations;



public class ActionsGetOrgSecretResponse {
    public String contentType;
    public ActionsGetOrgSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetOrgSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OrganizationActionsSecret organizationActionsSecret;
    public ActionsGetOrgSecretResponse withOrganizationActionsSecret(openapisdk.models.shared.OrganizationActionsSecret organizationActionsSecret) {
        this.organizationActionsSecret = organizationActionsSecret;
        return this;
    }
}