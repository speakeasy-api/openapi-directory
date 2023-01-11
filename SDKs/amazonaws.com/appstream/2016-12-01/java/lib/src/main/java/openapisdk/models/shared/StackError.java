package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StackError
 * Describes a stack error.
**/
public class StackError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public StackErrorCodeEnum errorCode;
    public StackError withErrorCode(StackErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public StackError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
}