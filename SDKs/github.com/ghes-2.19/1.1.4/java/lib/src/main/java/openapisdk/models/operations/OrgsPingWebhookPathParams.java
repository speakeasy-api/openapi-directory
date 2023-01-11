package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsPingWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hook_id")
    public Long hookId;
    public OrgsPingWebhookPathParams withHookId(Long hookId) {
        this.hookId = hookId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsPingWebhookPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}