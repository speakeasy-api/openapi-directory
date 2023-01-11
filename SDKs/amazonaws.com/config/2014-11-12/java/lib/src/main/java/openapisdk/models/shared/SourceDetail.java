package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceDetail
 * Provides the source and the message types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic. You can specify the parameter values for <code>SourceDetail</code> only for custom rules. 
**/
public class SourceDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSource")
    public EventSourceEnum eventSource;
    public SourceDetail withEventSource(EventSourceEnum eventSource) {
        this.eventSource = eventSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumExecutionFrequency")
    public MaximumExecutionFrequencyEnum maximumExecutionFrequency;
    public SourceDetail withMaximumExecutionFrequency(MaximumExecutionFrequencyEnum maximumExecutionFrequency) {
        this.maximumExecutionFrequency = maximumExecutionFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageType")
    public MessageTypeEnum messageType;
    public SourceDetail withMessageType(MessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
}