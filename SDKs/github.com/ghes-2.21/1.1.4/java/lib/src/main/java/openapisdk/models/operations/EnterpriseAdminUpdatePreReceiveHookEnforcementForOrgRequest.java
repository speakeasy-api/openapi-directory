package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest {
    public EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgPathParams pathParams;
    public EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest withPathParams(EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody request;
    public EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest withRequest(EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody request) {
        this.request = request;
        return this;
    }
}