package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutWebhookInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public PutWebhookInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("webhook")
    public WebhookDefinition webhook;
    public PutWebhookInput withWebhook(WebhookDefinition webhook) {
        this.webhook = webhook;
        return this;
    }
}