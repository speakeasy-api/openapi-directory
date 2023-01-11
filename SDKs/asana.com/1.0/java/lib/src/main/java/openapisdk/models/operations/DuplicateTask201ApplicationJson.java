package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DuplicateTask201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.JobResponse data;
    public DuplicateTask201ApplicationJson withData(openapisdk.models.shared.JobResponse data) {
        this.data = data;
        return this;
    }
}