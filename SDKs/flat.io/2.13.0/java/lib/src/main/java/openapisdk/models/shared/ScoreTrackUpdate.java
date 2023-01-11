package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScoreTrackUpdate
 * Update an existing track.
 * 
**/
public class ScoreTrackUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default")
    public Boolean default_;
    public ScoreTrackUpdate withDefault(Boolean default_) {
        this.default_ = default_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ScoreTrackStateEnum state;
    public ScoreTrackUpdate withState(ScoreTrackStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("synchronizationPoints")
    public ScoreTrackPoint[] synchronizationPoints;
    public ScoreTrackUpdate withSynchronizationPoints(ScoreTrackPoint[] synchronizationPoints) {
        this.synchronizationPoints = synchronizationPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ScoreTrackUpdate withTitle(String title) {
        this.title = title;
        return this;
    }
}