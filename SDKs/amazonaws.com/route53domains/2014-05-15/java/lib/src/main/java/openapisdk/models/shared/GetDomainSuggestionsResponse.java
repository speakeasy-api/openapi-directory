package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDomainSuggestionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuggestionsList")
    public DomainSuggestion[] suggestionsList;
    public GetDomainSuggestionsResponse withSuggestionsList(DomainSuggestion[] suggestionsList) {
        this.suggestionsList = suggestionsList;
        return this;
    }
}