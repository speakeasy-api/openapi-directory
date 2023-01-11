package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDeleteTableResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public TableError[] errors;
    public BatchDeleteTableResponse withErrors(TableError[] errors) {
        this.errors = errors;
        return this;
    }
}