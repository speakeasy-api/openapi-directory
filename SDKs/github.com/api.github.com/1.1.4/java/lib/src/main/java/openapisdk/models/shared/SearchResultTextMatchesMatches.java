package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchResultTextMatchesMatches {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indices")
    public Long[] indices;
    public SearchResultTextMatchesMatches withIndices(Long[] indices) {
        this.indices = indices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public SearchResultTextMatchesMatches withText(String text) {
        this.text = text;
        return this;
    }
}