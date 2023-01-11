package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValidationError
 * Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline.
**/
public class ValidationError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public String[] errors;
    public ValidationError withErrors(String[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ValidationError withId(String id) {
        this.id = id;
        return this;
    }
}