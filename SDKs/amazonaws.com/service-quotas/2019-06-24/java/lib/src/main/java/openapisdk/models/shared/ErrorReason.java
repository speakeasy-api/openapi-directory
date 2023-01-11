package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorReason
 * An error that explains why an action did not succeed.
**/
public class ErrorReason {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public ErrorCodeEnum errorCode;
    public ErrorReason withErrorCode(ErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public ErrorReason withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
}