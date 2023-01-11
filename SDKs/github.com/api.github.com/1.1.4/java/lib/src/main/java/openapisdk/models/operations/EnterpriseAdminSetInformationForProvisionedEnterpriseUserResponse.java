package openapisdk.models.operations;



public class EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse {
    public String contentType;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ScimEnterpriseUser scimEnterpriseUser;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse withScimEnterpriseUser(openapisdk.models.shared.ScimEnterpriseUser scimEnterpriseUser) {
        this.scimEnterpriseUser = scimEnterpriseUser;
        return this;
    }
}