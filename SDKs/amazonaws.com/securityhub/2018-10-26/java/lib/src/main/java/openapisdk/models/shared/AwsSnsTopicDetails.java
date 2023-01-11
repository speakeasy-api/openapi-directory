package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsSnsTopicDetails
 * A wrapper type for the topic's ARN.
**/
public class AwsSnsTopicDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsMasterKeyId")
    public String kmsMasterKeyId;
    public AwsSnsTopicDetails withKmsMasterKeyId(String kmsMasterKeyId) {
        this.kmsMasterKeyId = kmsMasterKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Owner")
    public String owner;
    public AwsSnsTopicDetails withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subscription")
    public AwsSnsTopicSubscription[] subscription;
    public AwsSnsTopicDetails withSubscription(AwsSnsTopicSubscription[] subscription) {
        this.subscription = subscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TopicName")
    public String topicName;
    public AwsSnsTopicDetails withTopicName(String topicName) {
        this.topicName = topicName;
        return this;
    }
}