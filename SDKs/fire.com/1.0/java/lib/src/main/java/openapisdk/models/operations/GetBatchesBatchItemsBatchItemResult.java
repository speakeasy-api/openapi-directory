package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBatchesBatchItemsBatchItemResult
 * The outcome of the attempted transaction.
**/
public class GetBatchesBatchItemsBatchItemResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public GetBatchesBatchItemsBatchItemResult withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GetBatchesBatchItemsBatchItemResult withMessage(String message) {
        this.message = message;
        return this;
    }
}