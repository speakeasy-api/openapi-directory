package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartWorkflowRunRequest {
    @JsonProperty("Name")
    public String name;
    public StartWorkflowRunRequest withName(String name) {
        this.name = name;
        return this;
    }
}