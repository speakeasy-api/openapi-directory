package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartTriggerRequest {
    @JsonProperty("Name")
    public String name;
    public StartTriggerRequest withName(String name) {
        this.name = name;
        return this;
    }
}