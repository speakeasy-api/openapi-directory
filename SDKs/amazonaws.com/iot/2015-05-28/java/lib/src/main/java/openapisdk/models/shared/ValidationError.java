package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValidationError
 * Information about an error found in a behavior specification.
**/
public class ValidationError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public ValidationError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
}