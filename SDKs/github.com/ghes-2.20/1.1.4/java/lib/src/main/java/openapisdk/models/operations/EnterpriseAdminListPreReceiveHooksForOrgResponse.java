package openapisdk.models.operations;



public class EnterpriseAdminListPreReceiveHooksForOrgResponse {
    public String contentType;
    public EnterpriseAdminListPreReceiveHooksForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminListPreReceiveHooksForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OrgPreReceiveHook[] orgPreReceiveHooks;
    public EnterpriseAdminListPreReceiveHooksForOrgResponse withOrgPreReceiveHooks(openapisdk.models.shared.OrgPreReceiveHook[] orgPreReceiveHooks) {
        this.orgPreReceiveHooks = orgPreReceiveHooks;
        return this;
    }
}