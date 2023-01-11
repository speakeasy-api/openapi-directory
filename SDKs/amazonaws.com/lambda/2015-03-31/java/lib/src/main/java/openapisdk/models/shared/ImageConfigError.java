package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageConfigError
 * Error response to GetFunctionConfiguration.
**/
public class ImageConfigError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public String errorCode;
    public ImageConfigError withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public ImageConfigError withMessage(String message) {
        this.message = message;
        return this;
    }
}