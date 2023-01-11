package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UpdateActivityRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraints")
    public Constraints constraints;
    public UpdateActivityRequest withConstraints(Constraints constraints) {
        this.constraints = constraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nowPlaying")
    public PlayerContext nowPlaying;
    public UpdateActivityRequest withNowPlaying(PlayerContext nowPlaying) {
        this.nowPlaying = nowPlaying;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previouslyPlaying")
    public PlayerContext previouslyPlaying;
    public UpdateActivityRequest withPreviouslyPlaying(PlayerContext previouslyPlaying) {
        this.previouslyPlaying = previouslyPlaying;
        return this;
    }
    @JsonProperty("report")
    public QueueActivityReportEventEnum report;
    public UpdateActivityRequest withReport(QueueActivityReportEventEnum report) {
        this.report = report;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public UpdateActivityRequest withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonProperty("userActivity")
    public UserActivity userActivity;
    public UpdateActivityRequest withUserActivity(UserActivity userActivity) {
        this.userActivity = userActivity;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public UpdateActivityRequest withVersion(String version) {
        this.version = version;
        return this;
    }
}