package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeReplayResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public DescribeReplayResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Destination")
    public ReplayDestination destination;
    public DescribeReplayResponse withDestination(ReplayDestination destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EventEndTime")
    public OffsetDateTime eventEndTime;
    public DescribeReplayResponse withEventEndTime(OffsetDateTime eventEndTime) {
        this.eventEndTime = eventEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EventLastReplayedTime")
    public OffsetDateTime eventLastReplayedTime;
    public DescribeReplayResponse withEventLastReplayedTime(OffsetDateTime eventLastReplayedTime) {
        this.eventLastReplayedTime = eventLastReplayedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSourceArn")
    public String eventSourceArn;
    public DescribeReplayResponse withEventSourceArn(String eventSourceArn) {
        this.eventSourceArn = eventSourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EventStartTime")
    public OffsetDateTime eventStartTime;
    public DescribeReplayResponse withEventStartTime(OffsetDateTime eventStartTime) {
        this.eventStartTime = eventStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplayArn")
    public String replayArn;
    public DescribeReplayResponse withReplayArn(String replayArn) {
        this.replayArn = replayArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ReplayEndTime")
    public OffsetDateTime replayEndTime;
    public DescribeReplayResponse withReplayEndTime(OffsetDateTime replayEndTime) {
        this.replayEndTime = replayEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplayName")
    public String replayName;
    public DescribeReplayResponse withReplayName(String replayName) {
        this.replayName = replayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ReplayStartTime")
    public OffsetDateTime replayStartTime;
    public DescribeReplayResponse withReplayStartTime(OffsetDateTime replayStartTime) {
        this.replayStartTime = replayStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public ReplayStateEnum state;
    public DescribeReplayResponse withState(ReplayStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateReason")
    public String stateReason;
    public DescribeReplayResponse withStateReason(String stateReason) {
        this.stateReason = stateReason;
        return this;
    }
}