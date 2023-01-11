package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Range
 * Identifies where the sensitive data begins and ends.
**/
public class Range {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("End")
    public Long end;
    public Range withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Start")
    public Long start;
    public Range withStart(Long start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartColumn")
    public Long startColumn;
    public Range withStartColumn(Long startColumn) {
        this.startColumn = startColumn;
        return this;
    }
}