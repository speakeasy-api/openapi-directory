package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Subscription
 * This data type is used as a response element in the <a>ListEventSubscriptions</a> action.
**/
public class Subscription {
    @JsonProperty("eventSubscriptions")
    public EventSubscription[] eventSubscriptions;
    public Subscription withEventSubscriptions(EventSubscription[] eventSubscriptions) {
        this.eventSubscriptions = eventSubscriptions;
        return this;
    }
    @JsonProperty("resourceArn")
    public String resourceArn;
    public Subscription withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("topicArn")
    public String topicArn;
    public Subscription withTopicArn(String topicArn) {
        this.topicArn = topicArn;
        return this;
    }
}