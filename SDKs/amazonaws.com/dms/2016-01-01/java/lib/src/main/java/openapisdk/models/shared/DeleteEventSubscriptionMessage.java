package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteEventSubscriptionMessage
 * <p/>
**/
public class DeleteEventSubscriptionMessage {
    @JsonProperty("SubscriptionName")
    public String subscriptionName;
    public DeleteEventSubscriptionMessage withSubscriptionName(String subscriptionName) {
        this.subscriptionName = subscriptionName;
        return this;
    }
}