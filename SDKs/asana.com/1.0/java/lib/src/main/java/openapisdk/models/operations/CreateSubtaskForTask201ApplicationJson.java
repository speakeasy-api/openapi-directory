package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSubtaskForTask201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TaskResponse data;
    public CreateSubtaskForTask201ApplicationJson withData(openapisdk.models.shared.TaskResponse data) {
        this.data = data;
        return this;
    }
}