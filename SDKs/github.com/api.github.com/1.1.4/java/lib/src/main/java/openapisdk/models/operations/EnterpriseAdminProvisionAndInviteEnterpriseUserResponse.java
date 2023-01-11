package openapisdk.models.operations;



public class EnterpriseAdminProvisionAndInviteEnterpriseUserResponse {
    public String contentType;
    public EnterpriseAdminProvisionAndInviteEnterpriseUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminProvisionAndInviteEnterpriseUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ScimEnterpriseUser scimEnterpriseUser;
    public EnterpriseAdminProvisionAndInviteEnterpriseUserResponse withScimEnterpriseUser(openapisdk.models.shared.ScimEnterpriseUser scimEnterpriseUser) {
        this.scimEnterpriseUser = scimEnterpriseUser;
        return this;
    }
}