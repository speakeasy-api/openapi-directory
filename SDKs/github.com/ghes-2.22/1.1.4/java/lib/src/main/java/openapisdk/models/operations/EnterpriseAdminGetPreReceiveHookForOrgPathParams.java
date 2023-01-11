package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminGetPreReceiveHookForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public EnterpriseAdminGetPreReceiveHookForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pre_receive_hook_id")
    public Long preReceiveHookId;
    public EnterpriseAdminGetPreReceiveHookForOrgPathParams withPreReceiveHookId(Long preReceiveHookId) {
        this.preReceiveHookId = preReceiveHookId;
        return this;
    }
}