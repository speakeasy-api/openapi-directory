package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveTagForTaskRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TaskRemoveTagRequest data;
    public RemoveTagForTaskRequestBody withData(openapisdk.models.shared.TaskRemoveTagRequest data) {
        this.data = data;
        return this;
    }
}