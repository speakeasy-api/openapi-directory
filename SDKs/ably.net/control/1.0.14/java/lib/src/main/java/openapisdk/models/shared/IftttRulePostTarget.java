package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IftttRulePostTarget {
    @JsonProperty("eventName")
    public String eventName;
    public IftttRulePostTarget withEventName(String eventName) {
        this.eventName = eventName;
        return this;
    }
    @JsonProperty("webhookKey")
    public String webhookKey;
    public IftttRulePostTarget withWebhookKey(String webhookKey) {
        this.webhookKey = webhookKey;
        return this;
    }
}