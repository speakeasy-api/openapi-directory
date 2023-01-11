package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webhookId")
    public String webhookId;
    public UpdateWebhookPathParams withWebhookId(String webhookId) {
        this.webhookId = webhookId;
        return this;
    }
}