package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateError
 * An object containing the error encountered with the last update: <code>ErrorCode</code>, <code>ErrorMessage</code>.
**/
public class UpdateError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public String errorCode;
    public UpdateError withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public UpdateError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
}