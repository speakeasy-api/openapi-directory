package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webhook_gid")
    public String webhookGid;
    public GetWebhookPathParams withWebhookGid(String webhookGid) {
        this.webhookGid = webhookGid;
        return this;
    }
}