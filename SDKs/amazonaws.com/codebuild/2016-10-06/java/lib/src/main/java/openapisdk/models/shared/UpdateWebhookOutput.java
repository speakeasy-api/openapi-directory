package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWebhookOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook")
    public Webhook webhook;
    public UpdateWebhookOutput withWebhook(Webhook webhook) {
        this.webhook = webhook;
        return this;
    }
}