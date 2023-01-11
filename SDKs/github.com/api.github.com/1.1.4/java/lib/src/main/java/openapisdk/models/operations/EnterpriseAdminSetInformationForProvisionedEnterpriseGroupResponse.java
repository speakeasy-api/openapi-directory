package openapisdk.models.operations;



public class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse {
    public String contentType;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ScimEnterpriseGroup scimEnterpriseGroup;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse withScimEnterpriseGroup(openapisdk.models.shared.ScimEnterpriseGroup scimEnterpriseGroup) {
        this.scimEnterpriseGroup = scimEnterpriseGroup;
        return this;
    }
}