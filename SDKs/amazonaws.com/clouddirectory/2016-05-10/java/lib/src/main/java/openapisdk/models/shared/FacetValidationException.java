package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FacetValidationException
 * The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.
**/
public class FacetValidationException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public FacetValidationException withMessage(String message) {
        this.message = message;
        return this;
    }
}