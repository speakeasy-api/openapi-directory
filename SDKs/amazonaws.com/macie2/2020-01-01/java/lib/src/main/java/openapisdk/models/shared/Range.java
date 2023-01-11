package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Range
 * Specifies the location of an occurrence of sensitive data in a non-binary text file, such as an HTML, TXT, or XML file.
**/
public class Range {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Long end;
    public Range withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Long start;
    public Range withStart(Long start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startColumn")
    public Long startColumn;
    public Range withStartColumn(Long startColumn) {
        this.startColumn = startColumn;
        return this;
    }
}