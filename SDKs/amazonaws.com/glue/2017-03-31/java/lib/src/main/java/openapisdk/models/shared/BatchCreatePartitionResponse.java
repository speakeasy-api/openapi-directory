package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchCreatePartitionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public PartitionError[] errors;
    public BatchCreatePartitionResponse withErrors(PartitionError[] errors) {
        this.errors = errors;
        return this;
    }
}