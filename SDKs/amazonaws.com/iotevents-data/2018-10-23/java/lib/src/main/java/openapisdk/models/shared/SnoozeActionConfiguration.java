package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SnoozeActionConfiguration
 * Contains the configuration information of a snooze action.
**/
public class SnoozeActionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public SnoozeActionConfiguration withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snoozeDuration")
    public Long snoozeDuration;
    public SnoozeActionConfiguration withSnoozeDuration(Long snoozeDuration) {
        this.snoozeDuration = snoozeDuration;
        return this;
    }
}