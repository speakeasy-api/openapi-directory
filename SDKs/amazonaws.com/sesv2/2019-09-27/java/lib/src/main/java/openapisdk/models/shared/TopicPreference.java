package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TopicPreference
 * The contact's preference for being opted-in to or opted-out of a topic.
**/
public class TopicPreference {
    @JsonProperty("SubscriptionStatus")
    public SubscriptionStatusEnum subscriptionStatus;
    public TopicPreference withSubscriptionStatus(SubscriptionStatusEnum subscriptionStatus) {
        this.subscriptionStatus = subscriptionStatus;
        return this;
    }
    @JsonProperty("TopicName")
    public String topicName;
    public TopicPreference withTopicName(String topicName) {
        this.topicName = topicName;
        return this;
    }
}