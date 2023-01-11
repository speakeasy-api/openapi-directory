package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TimeStamp {
    @JsonProperty("nanoSeconds")
    public Long nanoSeconds;
    public TimeStamp withNanoSeconds(Long nanoSeconds) {
        this.nanoSeconds = nanoSeconds;
        return this;
    }
    @JsonProperty("seconds")
    public Long seconds;
    public TimeStamp withSeconds(Long seconds) {
        this.seconds = seconds;
        return this;
    }
}