package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetryBuildBatchInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetryBuildBatchInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryType")
    public RetryBuildBatchTypeEnum retryType;
    public RetryBuildBatchInput withRetryType(RetryBuildBatchTypeEnum retryType) {
        this.retryType = retryType;
        return this;
    }
}