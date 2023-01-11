package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FailureInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public ErrorCodeEnum errorCode;
    public FailureInfo withErrorCode(ErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public FailureInfo withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusCode")
    public Long statusCode;
    public FailureInfo withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}