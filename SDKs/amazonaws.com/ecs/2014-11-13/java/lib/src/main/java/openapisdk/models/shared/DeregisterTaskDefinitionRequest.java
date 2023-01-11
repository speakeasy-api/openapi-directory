package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeregisterTaskDefinitionRequest {
    @JsonProperty("taskDefinition")
    public String taskDefinition;
    public DeregisterTaskDefinitionRequest withTaskDefinition(String taskDefinition) {
        this.taskDefinition = taskDefinition;
        return this;
    }
}