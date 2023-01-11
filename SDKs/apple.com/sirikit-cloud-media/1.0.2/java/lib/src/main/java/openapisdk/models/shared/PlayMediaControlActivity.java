package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlayMediaControlActivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playElapsed")
    public Long playElapsed;
    public PlayMediaControlActivity withPlayElapsed(Long playElapsed) {
        this.playElapsed = playElapsed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playElapsedInterval")
    public Long playElapsedInterval;
    public PlayMediaControlActivity withPlayElapsedInterval(Long playElapsedInterval) {
        this.playElapsedInterval = playElapsedInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playPaused")
    public Long playPaused;
    public PlayMediaControlActivity withPlayPaused(Long playPaused) {
        this.playPaused = playPaused;
        return this;
    }
}