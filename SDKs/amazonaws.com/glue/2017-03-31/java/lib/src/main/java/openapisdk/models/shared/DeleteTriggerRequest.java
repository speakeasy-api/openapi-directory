package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteTriggerRequest {
    @JsonProperty("Name")
    public String name;
    public DeleteTriggerRequest withName(String name) {
        this.name = name;
        return this;
    }
}