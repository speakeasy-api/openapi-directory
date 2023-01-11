package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class StartReplayRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public StartReplayRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Destination")
    public ReplayDestination destination;
    public StartReplayRequest withDestination(ReplayDestination destination) {
        this.destination = destination;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("EventEndTime")
    public OffsetDateTime eventEndTime;
    public StartReplayRequest withEventEndTime(OffsetDateTime eventEndTime) {
        this.eventEndTime = eventEndTime;
        return this;
    }
    @JsonProperty("EventSourceArn")
    public String eventSourceArn;
    public StartReplayRequest withEventSourceArn(String eventSourceArn) {
        this.eventSourceArn = eventSourceArn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("EventStartTime")
    public OffsetDateTime eventStartTime;
    public StartReplayRequest withEventStartTime(OffsetDateTime eventStartTime) {
        this.eventStartTime = eventStartTime;
        return this;
    }
    @JsonProperty("ReplayName")
    public String replayName;
    public StartReplayRequest withReplayName(String replayName) {
        this.replayName = replayName;
        return this;
    }
}