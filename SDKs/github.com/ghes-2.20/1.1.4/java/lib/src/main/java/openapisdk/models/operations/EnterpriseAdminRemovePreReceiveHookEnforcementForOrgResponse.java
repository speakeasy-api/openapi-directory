package openapisdk.models.operations;



public class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse {
    public String contentType;
    public EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OrgPreReceiveHook orgPreReceiveHook;
    public EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse withOrgPreReceiveHook(openapisdk.models.shared.OrgPreReceiveHook orgPreReceiveHook) {
        this.orgPreReceiveHook = orgPreReceiveHook;
        return this;
    }
}