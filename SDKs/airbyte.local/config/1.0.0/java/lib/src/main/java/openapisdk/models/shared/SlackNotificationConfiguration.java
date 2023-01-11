package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SlackNotificationConfiguration {
    @JsonProperty("webhook")
    public String webhook;
    public SlackNotificationConfiguration withWebhook(String webhook) {
        this.webhook = webhook;
        return this;
    }
}