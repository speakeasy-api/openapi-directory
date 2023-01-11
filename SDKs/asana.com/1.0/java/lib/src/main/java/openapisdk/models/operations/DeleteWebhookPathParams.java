package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webhook_gid")
    public String webhookGid;
    public DeleteWebhookPathParams withWebhookGid(String webhookGid) {
        this.webhookGid = webhookGid;
        return this;
    }
}