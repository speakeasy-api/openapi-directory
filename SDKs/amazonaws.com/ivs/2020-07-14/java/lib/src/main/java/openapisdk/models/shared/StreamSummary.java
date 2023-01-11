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
 * StreamSummary
 * Summary information about a stream.
**/
public class StreamSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelArn")
    public String channelArn;
    public StreamSummary withChannelArn(String channelArn) {
        this.channelArn = channelArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health")
    public StreamHealthEnum health;
    public StreamSummary withHealth(StreamHealthEnum health) {
        this.health = health;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public StreamSummary withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public StreamStateEnum state;
    public StreamSummary withState(StreamStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewerCount")
    public Long viewerCount;
    public StreamSummary withViewerCount(Long viewerCount) {
        this.viewerCount = viewerCount;
        return this;
    }
}