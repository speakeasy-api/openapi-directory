package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDeleteTableVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public TableVersionError[] errors;
    public BatchDeleteTableVersionResponse withErrors(TableVersionError[] errors) {
        this.errors = errors;
        return this;
    }
}