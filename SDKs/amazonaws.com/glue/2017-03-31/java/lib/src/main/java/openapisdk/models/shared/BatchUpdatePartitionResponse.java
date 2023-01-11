package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchUpdatePartitionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public BatchUpdatePartitionFailureEntry[] errors;
    public BatchUpdatePartitionResponse withErrors(BatchUpdatePartitionFailureEntry[] errors) {
        this.errors = errors;
        return this;
    }
}