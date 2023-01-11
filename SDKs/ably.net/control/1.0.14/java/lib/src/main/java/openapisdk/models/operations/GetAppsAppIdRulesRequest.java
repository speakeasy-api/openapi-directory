package openapisdk.models.operations;



public class GetAppsAppIdRulesRequest {
    public GetAppsAppIdRulesPathParams pathParams;
    public GetAppsAppIdRulesRequest withPathParams(GetAppsAppIdRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAppsAppIdRulesSecurity security;
    public GetAppsAppIdRulesRequest withSecurity(GetAppsAppIdRulesSecurity security) {
        this.security = security;
        return this;
    }
}