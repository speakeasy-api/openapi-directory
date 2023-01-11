package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminPingGlobalWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hook_id")
    public Long hookId;
    public EnterpriseAdminPingGlobalWebhookPathParams withHookId(Long hookId) {
        this.hookId = hookId;
        return this;
    }
}