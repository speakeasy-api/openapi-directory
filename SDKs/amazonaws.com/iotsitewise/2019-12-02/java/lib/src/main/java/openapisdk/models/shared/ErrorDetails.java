package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorDetails
 * Contains the details of an IoT SiteWise error.
**/
public class ErrorDetails {
    @JsonProperty("code")
    public ErrorCodeEnum code;
    public ErrorDetails withCode(ErrorCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public DetailedError[] details;
    public ErrorDetails withDetails(DetailedError[] details) {
        this.details = details;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public ErrorDetails withMessage(String message) {
        this.message = message;
        return this;
    }
}