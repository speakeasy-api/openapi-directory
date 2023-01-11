package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateWebhookResult
 *  The result structure for the update webhook request. 
**/
public class UpdateWebhookResult {
    @JsonProperty("webhook")
    public Webhook webhook;
    public UpdateWebhookResult withWebhook(Webhook webhook) {
        this.webhook = webhook;
        return this;
    }
}