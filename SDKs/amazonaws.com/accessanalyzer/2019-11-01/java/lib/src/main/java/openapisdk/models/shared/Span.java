package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Span
 * A span in a policy. The span consists of a start position (inclusive) and end position (exclusive).
**/
public class Span {
    @JsonProperty("end")
    public Position end;
    public Span withEnd(Position end) {
        this.end = end;
        return this;
    }
    @JsonProperty("start")
    public Position start;
    public Span withStart(Position start) {
        this.start = start;
        return this;
    }
}