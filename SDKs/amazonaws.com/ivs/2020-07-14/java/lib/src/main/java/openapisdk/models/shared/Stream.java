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
 * Stream
 * Specifies a live video stream that has been ingested and distributed.
**/
public class Stream {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelArn")
    public String channelArn;
    public Stream withChannelArn(String channelArn) {
        this.channelArn = channelArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health")
    public StreamHealthEnum health;
    public Stream withHealth(StreamHealthEnum health) {
        this.health = health;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playbackUrl")
    public String playbackUrl;
    public Stream withPlaybackUrl(String playbackUrl) {
        this.playbackUrl = playbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public Stream withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public StreamStateEnum state;
    public Stream withState(StreamStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewerCount")
    public Long viewerCount;
    public Stream withViewerCount(Long viewerCount) {
        this.viewerCount = viewerCount;
        return this;
    }
}