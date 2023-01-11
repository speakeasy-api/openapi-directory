package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ErrorError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public ErrorError withMessage(String message) {
        this.message = message;
        return this;
    }
}