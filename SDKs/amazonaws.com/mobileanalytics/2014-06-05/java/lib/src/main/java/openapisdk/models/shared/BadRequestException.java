package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BadRequestException
 * An exception object returned when a request fails.
**/
public class BadRequestException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public BadRequestException withMessage(String message) {
        this.message = message;
        return this;
    }
}