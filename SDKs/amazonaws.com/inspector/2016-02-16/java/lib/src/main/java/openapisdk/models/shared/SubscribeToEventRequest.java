package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SubscribeToEventRequest {
    @JsonProperty("event")
    public InspectorEventEnum event;
    public SubscribeToEventRequest withEvent(InspectorEventEnum event) {
        this.event = event;
        return this;
    }
    @JsonProperty("resourceArn")
    public String resourceArn;
    public SubscribeToEventRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("topicArn")
    public String topicArn;
    public SubscribeToEventRequest withTopicArn(String topicArn) {
        this.topicArn = topicArn;
        return this;
    }
}