package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetRetainedMessageResponse
 * The output from the GetRetainedMessage operation.
**/
public class GetRetainedMessageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedTime")
    public Long lastModifiedTime;
    public GetRetainedMessageResponse withLastModifiedTime(Long lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public String payload;
    public GetRetainedMessageResponse withPayload(String payload) {
        this.payload = payload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qos")
    public Long qos;
    public GetRetainedMessageResponse withQos(Long qos) {
        this.qos = qos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public GetRetainedMessageResponse withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}