package openapisdk.models.operations;



public class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse {
    public String contentType;
    public EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OrgPreReceiveHook orgPreReceiveHook;
    public EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse withOrgPreReceiveHook(openapisdk.models.shared.OrgPreReceiveHook orgPreReceiveHook) {
        this.orgPreReceiveHook = orgPreReceiveHook;
        return this;
    }
}