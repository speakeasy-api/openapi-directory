package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchAutoCompleteResponse
 * Search auto complete query response
**/
public class SearchAutoCompleteResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terms")
    public SearchAutoCompleteResponseTerms[] terms;
    public SearchAutoCompleteResponse withTerms(SearchAutoCompleteResponseTerms[] terms) {
        this.terms = terms;
        return this;
    }
}