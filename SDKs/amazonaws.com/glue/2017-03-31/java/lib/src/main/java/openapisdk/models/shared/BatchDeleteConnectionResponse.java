package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDeleteConnectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public java.util.Map<String, ErrorDetail> errors;
    public BatchDeleteConnectionResponse withErrors(java.util.Map<String, ErrorDetail> errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Succeeded")
    public String[] succeeded;
    public BatchDeleteConnectionResponse withSucceeded(String[] succeeded) {
        this.succeeded = succeeded;
        return this;
    }
}