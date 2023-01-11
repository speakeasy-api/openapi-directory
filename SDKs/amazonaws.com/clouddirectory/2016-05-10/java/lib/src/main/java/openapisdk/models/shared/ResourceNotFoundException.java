package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceNotFoundException
 * The specified resource could not be found.
**/
public class ResourceNotFoundException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public ResourceNotFoundException withMessage(String message) {
        this.message = message;
        return this;
    }
}