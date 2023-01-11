package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorInformation
 * Information about a deployment error.
**/
public class ErrorInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public ErrorCodeEnum code;
    public ErrorInformation withCode(ErrorCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ErrorInformation withMessage(String message) {
        this.message = message;
        return this;
    }
}