package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line")
    public Integer line;
    public SearchLine withLine(Integer line) {
        this.line = line;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segments")
    public SearchSegment[] segments;
    public SearchLine withSegments(SearchSegment[] segments) {
        this.segments = segments;
        return this;
    }
}