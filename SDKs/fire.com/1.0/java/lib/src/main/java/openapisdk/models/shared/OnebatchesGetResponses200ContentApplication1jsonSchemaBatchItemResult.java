package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult
 * The outcome of the attempted transaction.
**/
public class OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult withMessage(String message) {
        this.message = message;
        return this;
    }
}