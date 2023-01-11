package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SuggestModel
 * Container for the suggestion information returned in a <code>SuggestResponse</code>.
**/
public class SuggestModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("found")
    public Long found;
    public SuggestModel withFound(Long found) {
        this.found = found;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public String query;
    public SuggestModel withQuery(String query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggestions")
    public SuggestionMatch[] suggestions;
    public SuggestModel withSuggestions(SuggestionMatch[] suggestions) {
        this.suggestions = suggestions;
        return this;
    }
}