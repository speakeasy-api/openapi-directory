package openapisdk.models.operations;



public class EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse {
    public String contentType;
    public EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ScimEnterpriseGroup scimEnterpriseGroup;
    public EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse withScimEnterpriseGroup(openapisdk.models.shared.ScimEnterpriseGroup scimEnterpriseGroup) {
        this.scimEnterpriseGroup = scimEnterpriseGroup;
        return this;
    }
}