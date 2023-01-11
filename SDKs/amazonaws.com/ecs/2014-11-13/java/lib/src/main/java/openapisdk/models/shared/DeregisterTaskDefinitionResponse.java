package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeregisterTaskDefinitionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskDefinition")
    public TaskDefinition taskDefinition;
    public DeregisterTaskDefinitionResponse withTaskDefinition(TaskDefinition taskDefinition) {
        this.taskDefinition = taskDefinition;
        return this;
    }
}