package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SuggestionMatch
 * An autocomplete suggestion that matches the query string specified in a <code>SuggestRequest</code>. 
**/
public class SuggestionMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SuggestionMatch withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Long score;
    public SuggestionMatch withScore(Long score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggestion")
    public String suggestion;
    public SuggestionMatch withSuggestion(String suggestion) {
        this.suggestion = suggestion;
        return this;
    }
}