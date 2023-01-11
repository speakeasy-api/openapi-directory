package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsDeleteWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hook_id")
    public Long hookId;
    public OrgsDeleteWebhookPathParams withHookId(Long hookId) {
        this.hookId = hookId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsDeleteWebhookPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}