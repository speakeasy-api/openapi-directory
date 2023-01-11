package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopImageBuilderRequest {
    @JsonProperty("Name")
    public String name;
    public StopImageBuilderRequest withName(String name) {
        this.name = name;
        return this;
    }
}