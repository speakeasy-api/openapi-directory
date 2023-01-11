package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorDetail
 * An object representing an error when an asynchronous operation fails.
**/
public class ErrorDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public ErrorCodeEnum errorCode;
    public ErrorDetail withErrorCode(ErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public ErrorDetail withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceIds")
    public String[] resourceIds;
    public ErrorDetail withResourceIds(String[] resourceIds) {
        this.resourceIds = resourceIds;
        return this;
    }
}