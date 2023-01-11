package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StillContainsLinksException
 * The object could not be deleted because links still exist. Remove the links and then try the operation again.
**/
public class StillContainsLinksException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public StillContainsLinksException withMessage(String message) {
        this.message = message;
        return this;
    }
}