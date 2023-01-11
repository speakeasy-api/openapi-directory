package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlayClock {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minutes")
    public Long minutes;
    public PlayClock withMinutes(Long minutes) {
        this.minutes = minutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seconds")
    public Long seconds;
    public PlayClock withSeconds(Long seconds) {
        this.seconds = seconds;
        return this;
    }
}