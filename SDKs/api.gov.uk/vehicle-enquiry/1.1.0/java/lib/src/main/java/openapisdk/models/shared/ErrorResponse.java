package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorResponse
 * Error Response
**/
public class ErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Errors[] errors;
    public ErrorResponse withErrors(Errors[] errors) {
        this.errors = errors;
        return this;
    }
}