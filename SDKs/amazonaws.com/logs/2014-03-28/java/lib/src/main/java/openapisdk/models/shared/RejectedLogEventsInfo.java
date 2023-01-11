package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RejectedLogEventsInfo
 * Represents the rejected events.
**/
public class RejectedLogEventsInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiredLogEventEndIndex")
    public Long expiredLogEventEndIndex;
    public RejectedLogEventsInfo withExpiredLogEventEndIndex(Long expiredLogEventEndIndex) {
        this.expiredLogEventEndIndex = expiredLogEventEndIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tooNewLogEventStartIndex")
    public Long tooNewLogEventStartIndex;
    public RejectedLogEventsInfo withTooNewLogEventStartIndex(Long tooNewLogEventStartIndex) {
        this.tooNewLogEventStartIndex = tooNewLogEventStartIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tooOldLogEventEndIndex")
    public Long tooOldLogEventEndIndex;
    public RejectedLogEventsInfo withTooOldLogEventEndIndex(Long tooOldLogEventEndIndex) {
        this.tooOldLogEventEndIndex = tooOldLogEventEndIndex;
        return this;
    }
}