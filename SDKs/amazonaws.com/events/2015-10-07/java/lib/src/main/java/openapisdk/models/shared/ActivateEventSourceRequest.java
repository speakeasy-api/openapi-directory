package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActivateEventSourceRequest {
    @JsonProperty("Name")
    public String name;
    public ActivateEventSourceRequest withName(String name) {
        this.name = name;
        return this;
    }
}