package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Replay
 * A <code>Replay</code> object that contains details about a replay.
**/
public class Replay {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EventEndTime")
    public OffsetDateTime eventEndTime;
    public Replay withEventEndTime(OffsetDateTime eventEndTime) {
        this.eventEndTime = eventEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EventLastReplayedTime")
    public OffsetDateTime eventLastReplayedTime;
    public Replay withEventLastReplayedTime(OffsetDateTime eventLastReplayedTime) {
        this.eventLastReplayedTime = eventLastReplayedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSourceArn")
    public String eventSourceArn;
    public Replay withEventSourceArn(String eventSourceArn) {
        this.eventSourceArn = eventSourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EventStartTime")
    public OffsetDateTime eventStartTime;
    public Replay withEventStartTime(OffsetDateTime eventStartTime) {
        this.eventStartTime = eventStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ReplayEndTime")
    public OffsetDateTime replayEndTime;
    public Replay withReplayEndTime(OffsetDateTime replayEndTime) {
        this.replayEndTime = replayEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplayName")
    public String replayName;
    public Replay withReplayName(String replayName) {
        this.replayName = replayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ReplayStartTime")
    public OffsetDateTime replayStartTime;
    public Replay withReplayStartTime(OffsetDateTime replayStartTime) {
        this.replayStartTime = replayStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public ReplayStateEnum state;
    public Replay withState(ReplayStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateReason")
    public String stateReason;
    public Replay withStateReason(String stateReason) {
        this.stateReason = stateReason;
        return this;
    }
}