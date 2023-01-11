package openapisdk.models.operations;



public class EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse {
    public String contentType;
    public EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ScimUserListEnterprise scimUserListEnterprise;
    public EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse withScimUserListEnterprise(openapisdk.models.shared.ScimUserListEnterprise scimUserListEnterprise) {
        this.scimUserListEnterprise = scimUserListEnterprise;
        return this;
    }
}