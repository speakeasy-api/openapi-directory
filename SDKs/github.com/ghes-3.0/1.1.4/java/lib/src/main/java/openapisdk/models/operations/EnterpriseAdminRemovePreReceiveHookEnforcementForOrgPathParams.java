package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public EnterpriseAdminRemovePreReceiveHookEnforcementForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pre_receive_hook_id")
    public Long preReceiveHookId;
    public EnterpriseAdminRemovePreReceiveHookEnforcementForOrgPathParams withPreReceiveHookId(Long preReceiveHookId) {
        this.preReceiveHookId = preReceiveHookId;
        return this;
    }
}