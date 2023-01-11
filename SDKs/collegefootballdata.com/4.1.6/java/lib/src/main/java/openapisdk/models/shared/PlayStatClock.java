package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlayStatClock {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minutes")
    public Long minutes;
    public PlayStatClock withMinutes(Long minutes) {
        this.minutes = minutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seconds")
    public Long seconds;
    public PlayStatClock withSeconds(Long seconds) {
        this.seconds = seconds;
        return this;
    }
}