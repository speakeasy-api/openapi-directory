package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeauthorizeConnectionRequest {
    @JsonProperty("Name")
    public String name;
    public DeauthorizeConnectionRequest withName(String name) {
        this.name = name;
        return this;
    }
}