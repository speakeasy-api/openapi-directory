package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddProjectForTaskRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TaskAddProjectRequest data;
    public AddProjectForTaskRequestBody withData(openapisdk.models.shared.TaskAddProjectRequest data) {
        this.data = data;
        return this;
    }
}