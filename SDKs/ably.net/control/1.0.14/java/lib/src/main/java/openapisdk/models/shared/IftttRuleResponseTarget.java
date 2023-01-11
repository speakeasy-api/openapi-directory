package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IftttRuleResponseTarget {
    @JsonProperty("eventName")
    public String eventName;
    public IftttRuleResponseTarget withEventName(String eventName) {
        this.eventName = eventName;
        return this;
    }
    @JsonProperty("webhookKey")
    public String webhookKey;
    public IftttRuleResponseTarget withWebhookKey(String webhookKey) {
        this.webhookKey = webhookKey;
        return this;
    }
}