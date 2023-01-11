package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DriveStartTime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minutes")
    public Long minutes;
    public DriveStartTime withMinutes(Long minutes) {
        this.minutes = minutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seconds")
    public Long seconds;
    public DriveStartTime withSeconds(Long seconds) {
        this.seconds = seconds;
        return this;
    }
}