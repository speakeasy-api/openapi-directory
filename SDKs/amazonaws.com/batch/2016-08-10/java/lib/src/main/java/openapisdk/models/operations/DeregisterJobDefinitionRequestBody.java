package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeregisterJobDefinitionRequestBody {
    @JsonProperty("jobDefinition")
    public String jobDefinition;
    public DeregisterJobDefinitionRequestBody withJobDefinition(String jobDefinition) {
        this.jobDefinition = jobDefinition;
        return this;
    }
}