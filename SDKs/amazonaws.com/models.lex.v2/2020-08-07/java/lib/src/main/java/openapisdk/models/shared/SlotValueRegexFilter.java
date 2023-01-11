package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SlotValueRegexFilter
 * Provides a regular expression used to validate the value of a slot.
**/
public class SlotValueRegexFilter {
    @JsonProperty("pattern")
    public String pattern;
    public SlotValueRegexFilter withPattern(String pattern) {
        this.pattern = pattern;
        return this;
    }
}