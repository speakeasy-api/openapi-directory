package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTaskCountsForProject200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TaskCountResponse data;
    public GetTaskCountsForProject200ApplicationJson withData(openapisdk.models.shared.TaskCountResponse data) {
        this.data = data;
        return this;
    }
}