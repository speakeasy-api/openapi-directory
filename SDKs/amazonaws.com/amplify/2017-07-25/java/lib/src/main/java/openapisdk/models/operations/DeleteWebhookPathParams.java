package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webhookId")
    public String webhookId;
    public DeleteWebhookPathParams withWebhookId(String webhookId) {
        this.webhookId = webhookId;
        return this;
    }
}