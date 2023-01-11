package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorInfo
 * Error message.
**/
public class ErrorInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCategory")
    public ErrorCategoryEnum errorCategory;
    public ErrorInfo withErrorCategory(ErrorCategoryEnum errorCategory) {
        this.errorCategory = errorCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public ErrorInfo withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
}