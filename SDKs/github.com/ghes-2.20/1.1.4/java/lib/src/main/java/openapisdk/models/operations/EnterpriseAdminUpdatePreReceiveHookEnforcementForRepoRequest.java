package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest {
    public EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoPathParams pathParams;
    public EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest withPathParams(EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody request;
    public EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest withRequest(EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody request) {
        this.request = request;
        return this;
    }
}