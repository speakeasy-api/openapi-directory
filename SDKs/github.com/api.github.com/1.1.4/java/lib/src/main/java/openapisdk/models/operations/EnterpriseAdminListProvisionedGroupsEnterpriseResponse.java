package openapisdk.models.operations;



public class EnterpriseAdminListProvisionedGroupsEnterpriseResponse {
    public String contentType;
    public EnterpriseAdminListProvisionedGroupsEnterpriseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminListProvisionedGroupsEnterpriseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ScimGroupListEnterprise scimGroupListEnterprise;
    public EnterpriseAdminListProvisionedGroupsEnterpriseResponse withScimGroupListEnterprise(openapisdk.models.shared.ScimGroupListEnterprise scimGroupListEnterprise) {
        this.scimGroupListEnterprise = scimGroupListEnterprise;
        return this;
    }
}