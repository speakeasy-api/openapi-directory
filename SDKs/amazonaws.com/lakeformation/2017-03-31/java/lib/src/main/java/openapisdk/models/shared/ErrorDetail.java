package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorDetail
 * Contains details about an error.
**/
public class ErrorDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public String errorCode;
    public ErrorDetail withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public ErrorDetail withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
}