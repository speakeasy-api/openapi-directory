package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserTaskList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.UserTaskListResponse data;
    public GetUserTaskList200ApplicationJson withData(openapisdk.models.shared.UserTaskListResponse data) {
        this.data = data;
        return this;
    }
}