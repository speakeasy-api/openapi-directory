package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotFoundException
 *  No entity can be found with the specified identifier. 
**/
public class NotFoundException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public NotFoundException withMessage(String message) {
        this.message = message;
        return this;
    }
}