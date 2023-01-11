package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsAppIdRulesRequest {
    public PostAppsAppIdRulesPathParams pathParams;
    public PostAppsAppIdRulesRequest withPathParams(PostAppsAppIdRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostAppsAppIdRulesRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostAppsAppIdRulesSecurity security;
    public PostAppsAppIdRulesRequest withSecurity(PostAppsAppIdRulesSecurity security) {
        this.security = security;
        return this;
    }
}