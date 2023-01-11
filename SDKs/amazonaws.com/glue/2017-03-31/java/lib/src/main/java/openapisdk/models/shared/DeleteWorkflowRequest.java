package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteWorkflowRequest {
    @JsonProperty("Name")
    public String name;
    public DeleteWorkflowRequest withName(String name) {
        this.name = name;
        return this;
    }
}