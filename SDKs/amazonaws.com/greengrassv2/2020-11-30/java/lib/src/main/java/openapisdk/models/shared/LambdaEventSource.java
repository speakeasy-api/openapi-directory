package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LambdaEventSource
 * Contains information about an event source for an Lambda function. The event source defines the topics on which this Lambda function subscribes to receive messages that run the function.
**/
public class LambdaEventSource {
    @JsonProperty("topic")
    public String topic;
    public LambdaEventSource withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonProperty("type")
    public LambdaEventSourceTypeEnum type;
    public LambdaEventSource withType(LambdaEventSourceTypeEnum type) {
        this.type = type;
        return this;
    }
}