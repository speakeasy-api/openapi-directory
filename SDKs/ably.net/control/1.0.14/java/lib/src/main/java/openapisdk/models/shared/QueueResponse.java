package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueueResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amqp")
    public QueueResponseAmqp amqp;
    public QueueResponse withAmqp(QueueResponseAmqp amqp) {
        this.amqp = amqp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public QueueResponse withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deadletter")
    public Boolean deadletter;
    public QueueResponse withDeadletter(Boolean deadletter) {
        this.deadletter = deadletter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deadletterId")
    public String deadletterId;
    public QueueResponse withDeadletterId(String deadletterId) {
        this.deadletterId = deadletterId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public QueueResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxLength")
    public Long maxLength;
    public QueueResponse withMaxLength(Long maxLength) {
        this.maxLength = maxLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public QueueResponseMessages messages;
    public QueueResponse withMessages(QueueResponseMessages messages) {
        this.messages = messages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public QueueResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public QueueResponse withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public QueueResponse withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stats")
    public QueueResponseStats stats;
    public QueueResponse withStats(QueueResponseStats stats) {
        this.stats = stats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stomp")
    public QueueResponseStomp stomp;
    public QueueResponse withStomp(QueueResponseStomp stomp) {
        this.stomp = stomp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Long ttl;
    public QueueResponse withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}