package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webhookId")
    public String webhookId;
    public GetWebhookPathParams withWebhookId(String webhookId) {
        this.webhookId = webhookId;
        return this;
    }
}