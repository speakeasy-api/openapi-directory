package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FacetInUseException
 * Occurs when deleting a facet that contains an attribute that is a target to an attribute reference in a different facet.
**/
public class FacetInUseException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public FacetInUseException withMessage(String message) {
        this.message = message;
        return this;
    }
}