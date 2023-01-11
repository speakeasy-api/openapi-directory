package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDeletePartitionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public PartitionError[] errors;
    public BatchDeletePartitionResponse withErrors(PartitionError[] errors) {
        this.errors = errors;
        return this;
    }
}