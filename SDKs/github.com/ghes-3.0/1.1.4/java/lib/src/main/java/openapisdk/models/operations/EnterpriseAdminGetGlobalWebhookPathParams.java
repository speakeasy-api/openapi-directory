package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminGetGlobalWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hook_id")
    public Long hookId;
    public EnterpriseAdminGetGlobalWebhookPathParams withHookId(Long hookId) {
        this.hookId = hookId;
        return this;
    }
}