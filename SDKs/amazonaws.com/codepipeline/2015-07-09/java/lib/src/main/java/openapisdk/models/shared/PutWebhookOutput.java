package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutWebhookOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook")
    public ListWebhookItem webhook;
    public PutWebhookOutput withWebhook(ListWebhookItem webhook) {
        this.webhook = webhook;
        return this;
    }
}