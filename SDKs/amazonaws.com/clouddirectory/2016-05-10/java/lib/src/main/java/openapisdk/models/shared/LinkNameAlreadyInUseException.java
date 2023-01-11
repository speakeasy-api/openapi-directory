package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinkNameAlreadyInUseException
 * Indicates that a link could not be created due to a naming conflict. Choose a different name and then try again.
**/
public class LinkNameAlreadyInUseException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public LinkNameAlreadyInUseException withMessage(String message) {
        this.message = message;
        return this;
    }
}