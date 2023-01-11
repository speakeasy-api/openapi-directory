package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopTriggerRequest {
    @JsonProperty("Name")
    public String name;
    public StopTriggerRequest withName(String name) {
        this.name = name;
        return this;
    }
}