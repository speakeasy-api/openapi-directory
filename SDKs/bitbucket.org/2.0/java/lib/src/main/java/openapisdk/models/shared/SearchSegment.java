package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchSegment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("match")
    public Boolean match;
    public SearchSegment withMatch(Boolean match) {
        this.match = match;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public SearchSegment withText(String text) {
        this.text = text;
        return this;
    }
}