package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FacetAlreadyExistsException
 * A facet with the same name already exists.
**/
public class FacetAlreadyExistsException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public FacetAlreadyExistsException withMessage(String message) {
        this.message = message;
        return this;
    }
}