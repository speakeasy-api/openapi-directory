package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PepMonitorUpdateRequestBody {
    @SpeakeasyMetadata("form:name=Webhook")
    public String webhook;
    public PepMonitorUpdateRequestBody withWebhook(String webhook) {
        this.webhook = webhook;
        return this;
    }
}