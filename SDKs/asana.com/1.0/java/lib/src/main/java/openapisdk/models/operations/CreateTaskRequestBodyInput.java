package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTaskRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TaskRequestInput data;
    public CreateTaskRequestBodyInput withData(openapisdk.models.shared.TaskRequestInput data) {
        this.data = data;
        return this;
    }
}