package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InvalidInputProperty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalidValue")
    public String invalidValue;
    public InvalidInputProperty withInvalidValue(String invalidValue) {
        this.invalidValue = invalidValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public InvalidInputProperty withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("propertyPath")
    public String propertyPath;
    public InvalidInputProperty withPropertyPath(String propertyPath) {
        this.propertyPath = propertyPath;
        return this;
    }
}