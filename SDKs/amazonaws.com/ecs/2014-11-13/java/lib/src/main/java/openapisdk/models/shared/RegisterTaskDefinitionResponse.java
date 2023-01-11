package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterTaskDefinitionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public RegisterTaskDefinitionResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskDefinition")
    public TaskDefinition taskDefinition;
    public RegisterTaskDefinitionResponse withTaskDefinition(TaskDefinition taskDefinition) {
        this.taskDefinition = taskDefinition;
        return this;
    }
}