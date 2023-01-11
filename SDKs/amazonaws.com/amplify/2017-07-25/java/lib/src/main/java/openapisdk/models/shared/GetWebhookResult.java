package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetWebhookResult
 *  The result structure for the get webhook request. 
**/
public class GetWebhookResult {
    @JsonProperty("webhook")
    public Webhook webhook;
    public GetWebhookResult withWebhook(Webhook webhook) {
        this.webhook = webhook;
        return this;
    }
}