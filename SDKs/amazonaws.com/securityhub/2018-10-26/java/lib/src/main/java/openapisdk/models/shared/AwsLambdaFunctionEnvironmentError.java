package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsLambdaFunctionEnvironmentError
 * Error messages for environment variables that could not be applied.
**/
public class AwsLambdaFunctionEnvironmentError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public String errorCode;
    public AwsLambdaFunctionEnvironmentError withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public AwsLambdaFunctionEnvironmentError withMessage(String message) {
        this.message = message;
        return this;
    }
}