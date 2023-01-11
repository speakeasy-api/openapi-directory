package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BadRequestException
 *  The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed. 
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