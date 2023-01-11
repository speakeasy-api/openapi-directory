package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FailedItemDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCode")
    public FailedItemErrorCodeEnum failureCode;
    public FailedItemDetails withFailureCode(FailedItemErrorCodeEnum failureCode) {
        this.failureCode = failureCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryable")
    public Boolean retryable;
    public FailedItemDetails withRetryable(Boolean retryable) {
        this.retryable = retryable;
        return this;
    }
}