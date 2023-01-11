package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveProjectForTaskRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TaskRemoveProjectRequest data;
    public RemoveProjectForTaskRequestBody withData(openapisdk.models.shared.TaskRemoveProjectRequest data) {
        this.data = data;
        return this;
    }
}