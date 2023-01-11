package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Substring
 * A reference to a substring of a literal string in a JSON document.
**/
public class Substring {
    @JsonProperty("length")
    public Long length;
    public Substring withLength(Long length) {
        this.length = length;
        return this;
    }
    @JsonProperty("start")
    public Long start;
    public Substring withStart(Long start) {
        this.start = start;
        return this;
    }
}