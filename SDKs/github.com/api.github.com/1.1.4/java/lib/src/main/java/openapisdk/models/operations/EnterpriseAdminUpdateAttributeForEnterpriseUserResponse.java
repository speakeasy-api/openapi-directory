package openapisdk.models.operations;



public class EnterpriseAdminUpdateAttributeForEnterpriseUserResponse {
    public String contentType;
    public EnterpriseAdminUpdateAttributeForEnterpriseUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminUpdateAttributeForEnterpriseUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ScimEnterpriseUser scimEnterpriseUser;
    public EnterpriseAdminUpdateAttributeForEnterpriseUserResponse withScimEnterpriseUser(openapisdk.models.shared.ScimEnterpriseUser scimEnterpriseUser) {
        this.scimEnterpriseUser = scimEnterpriseUser;
        return this;
    }
}