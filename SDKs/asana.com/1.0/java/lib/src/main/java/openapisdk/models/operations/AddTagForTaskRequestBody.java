package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddTagForTaskRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TaskAddTagRequest data;
    public AddTagForTaskRequestBody withData(openapisdk.models.shared.TaskAddTagRequest data) {
        this.data = data;
        return this;
    }
}