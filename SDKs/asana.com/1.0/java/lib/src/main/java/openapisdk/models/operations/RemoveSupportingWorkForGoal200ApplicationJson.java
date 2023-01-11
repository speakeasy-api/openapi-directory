package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveSupportingWorkForGoal200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public java.util.Map<String, Object> data;
    public RemoveSupportingWorkForGoal200ApplicationJson withData(java.util.Map<String, Object> data) {
        this.data = data;
        return this;
    }
}