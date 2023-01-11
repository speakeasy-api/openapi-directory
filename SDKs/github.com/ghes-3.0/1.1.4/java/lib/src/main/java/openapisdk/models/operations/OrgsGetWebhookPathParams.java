package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsGetWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hook_id")
    public Long hookId;
    public OrgsGetWebhookPathParams withHookId(Long hookId) {
        this.hookId = hookId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsGetWebhookPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}