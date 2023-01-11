package openapisdk.models.operations;



public class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse {
    public String contentType;
    public EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ScimEnterpriseGroup scimEnterpriseGroup;
    public EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse withScimEnterpriseGroup(openapisdk.models.shared.ScimEnterpriseGroup scimEnterpriseGroup) {
        this.scimEnterpriseGroup = scimEnterpriseGroup;
        return this;
    }
}