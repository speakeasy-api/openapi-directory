package openapisdk.models.operations;



public class EnterpriseAdminGetPreReceiveHookForOrgResponse {
    public String contentType;
    public EnterpriseAdminGetPreReceiveHookForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminGetPreReceiveHookForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OrgPreReceiveHook orgPreReceiveHook;
    public EnterpriseAdminGetPreReceiveHookForOrgResponse withOrgPreReceiveHook(openapisdk.models.shared.OrgPreReceiveHook orgPreReceiveHook) {
        this.orgPreReceiveHook = orgPreReceiveHook;
        return this;
    }
}