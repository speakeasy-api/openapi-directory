package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchException
 * Information about any problems encountered while processing a search request.
**/
public class SearchException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public SearchException withMessage(String message) {
        this.message = message;
        return this;
    }
}