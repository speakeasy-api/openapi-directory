package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteWebhookResult
 *  The result structure for the delete webhook request. 
**/
public class DeleteWebhookResult {
    @JsonProperty("webhook")
    public Webhook webhook;
    public DeleteWebhookResult withWebhook(Webhook webhook) {
        this.webhook = webhook;
        return this;
    }
}