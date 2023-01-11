package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DuplicateTaskRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TaskDuplicateRequest data;
    public DuplicateTaskRequestBody withData(openapisdk.models.shared.TaskDuplicateRequest data) {
        this.data = data;
        return this;
    }
}