package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyEventSubscriptionMessage
 * <p/>
**/
public class ModifyEventSubscriptionMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public ModifyEventSubscriptionMessage withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventCategories")
    public String[] eventCategories;
    public ModifyEventSubscriptionMessage withEventCategories(String[] eventCategories) {
        this.eventCategories = eventCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnsTopicArn")
    public String snsTopicArn;
    public ModifyEventSubscriptionMessage withSnsTopicArn(String snsTopicArn) {
        this.snsTopicArn = snsTopicArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceType")
    public String sourceType;
    public ModifyEventSubscriptionMessage withSourceType(String sourceType) {
        this.sourceType = sourceType;
        return this;
    }
    @JsonProperty("SubscriptionName")
    public String subscriptionName;
    public ModifyEventSubscriptionMessage withSubscriptionName(String subscriptionName) {
        this.subscriptionName = subscriptionName;
        return this;
    }
}