package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FacetNotFoundException
 * The specified <a>Facet</a> could not be found.
**/
public class FacetNotFoundException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public FacetNotFoundException withMessage(String message) {
        this.message = message;
        return this;
    }
}