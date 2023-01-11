package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminGetPreReceiveHookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pre_receive_hook_id")
    public Long preReceiveHookId;
    public EnterpriseAdminGetPreReceiveHookPathParams withPreReceiveHookId(Long preReceiveHookId) {
        this.preReceiveHookId = preReceiveHookId;
        return this;
    }
}