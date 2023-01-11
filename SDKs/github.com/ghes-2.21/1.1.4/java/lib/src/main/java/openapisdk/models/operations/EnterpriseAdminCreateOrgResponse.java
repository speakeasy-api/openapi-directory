package openapisdk.models.operations;



public class EnterpriseAdminCreateOrgResponse {
    public String contentType;
    public EnterpriseAdminCreateOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminCreateOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OrganizationSimple organizationSimple;
    public EnterpriseAdminCreateOrgResponse withOrganizationSimple(openapisdk.models.shared.OrganizationSimple organizationSimple) {
        this.organizationSimple = organizationSimple;
        return this;
    }
}