package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateWebhookResult
 *  The result structure for the create webhook request. 
**/
public class CreateWebhookResult {
    @JsonProperty("webhook")
    public Webhook webhook;
    public CreateWebhookResult withWebhook(Webhook webhook) {
        this.webhook = webhook;
        return this;
    }
}