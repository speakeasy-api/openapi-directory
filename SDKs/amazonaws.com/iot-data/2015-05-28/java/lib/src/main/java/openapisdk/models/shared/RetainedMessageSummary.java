package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RetainedMessageSummary
 * Information about a single retained message.
**/
public class RetainedMessageSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedTime")
    public Long lastModifiedTime;
    public RetainedMessageSummary withLastModifiedTime(Long lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payloadSize")
    public Long payloadSize;
    public RetainedMessageSummary withPayloadSize(Long payloadSize) {
        this.payloadSize = payloadSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qos")
    public Long qos;
    public RetainedMessageSummary withQos(Long qos) {
        this.qos = qos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public RetainedMessageSummary withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}