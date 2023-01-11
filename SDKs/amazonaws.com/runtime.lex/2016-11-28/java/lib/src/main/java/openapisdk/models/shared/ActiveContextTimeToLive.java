package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActiveContextTimeToLive
 * The length of time or number of turns that a context remains active.
**/
public class ActiveContextTimeToLive {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeToLiveInSeconds")
    public Long timeToLiveInSeconds;
    public ActiveContextTimeToLive withTimeToLiveInSeconds(Long timeToLiveInSeconds) {
        this.timeToLiveInSeconds = timeToLiveInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("turnsToLive")
    public Long turnsToLive;
    public ActiveContextTimeToLive withTurnsToLive(Long turnsToLive) {
        this.turnsToLive = turnsToLive;
        return this;
    }
}