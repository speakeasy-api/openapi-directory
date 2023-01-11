package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAppsAppIdRulesRuleIdRequest {
    public PatchAppsAppIdRulesRuleIdPathParams pathParams;
    public PatchAppsAppIdRulesRuleIdRequest withPathParams(PatchAppsAppIdRulesRuleIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PatchAppsAppIdRulesRuleIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PatchAppsAppIdRulesRuleIdSecurity security;
    public PatchAppsAppIdRulesRuleIdRequest withSecurity(PatchAppsAppIdRulesRuleIdSecurity security) {
        this.security = security;
        return this;
    }
}