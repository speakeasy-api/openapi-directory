package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchContentMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lines")
    public SearchLine[] lines;
    public SearchContentMatch withLines(SearchLine[] lines) {
        this.lines = lines;
        return this;
    }
}