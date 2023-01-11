package openapisdk.models.operations;



public class EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse {
    public String contentType;
    public EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ScimEnterpriseUser scimEnterpriseUser;
    public EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse withScimEnterpriseUser(openapisdk.models.shared.ScimEnterpriseUser scimEnterpriseUser) {
        this.scimEnterpriseUser = scimEnterpriseUser;
        return this;
    }
}