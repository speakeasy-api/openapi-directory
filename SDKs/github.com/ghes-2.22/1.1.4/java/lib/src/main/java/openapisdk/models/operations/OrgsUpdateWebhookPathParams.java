package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsUpdateWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hook_id")
    public Long hookId;
    public OrgsUpdateWebhookPathParams withHookId(Long hookId) {
        this.hookId = hookId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsUpdateWebhookPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}