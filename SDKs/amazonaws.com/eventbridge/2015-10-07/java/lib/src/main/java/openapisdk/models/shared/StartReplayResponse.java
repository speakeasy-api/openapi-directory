package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class StartReplayResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplayArn")
    public String replayArn;
    public StartReplayResponse withReplayArn(String replayArn) {
        this.replayArn = replayArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ReplayStartTime")
    public OffsetDateTime replayStartTime;
    public StartReplayResponse withReplayStartTime(OffsetDateTime replayStartTime) {
        this.replayStartTime = replayStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public ReplayStateEnum state;
    public StartReplayResponse withState(ReplayStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateReason")
    public String stateReason;
    public StartReplayResponse withStateReason(String stateReason) {
        this.stateReason = stateReason;
        return this;
    }
}