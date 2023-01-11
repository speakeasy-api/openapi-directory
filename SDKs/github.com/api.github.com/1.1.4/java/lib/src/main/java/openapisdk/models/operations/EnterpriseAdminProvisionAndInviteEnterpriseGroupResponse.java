package openapisdk.models.operations;



public class EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse {
    public String contentType;
    public EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ScimEnterpriseGroup scimEnterpriseGroup;
    public EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse withScimEnterpriseGroup(openapisdk.models.shared.ScimEnterpriseGroup scimEnterpriseGroup) {
        this.scimEnterpriseGroup = scimEnterpriseGroup;
        return this;
    }
}