package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessDeniedException
 * Access denied. Check your permissions.
**/
public class AccessDeniedException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public AccessDeniedException withMessage(String message) {
        this.message = message;
        return this;
    }
}