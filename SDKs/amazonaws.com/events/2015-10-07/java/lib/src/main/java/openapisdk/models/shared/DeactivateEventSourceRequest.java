package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeactivateEventSourceRequest {
    @JsonProperty("Name")
    public String name;
    public DeactivateEventSourceRequest withName(String name) {
        this.name = name;
        return this;
    }
}