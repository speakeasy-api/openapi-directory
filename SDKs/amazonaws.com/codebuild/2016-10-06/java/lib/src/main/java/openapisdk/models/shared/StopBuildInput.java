package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopBuildInput {
    @JsonProperty("id")
    public String id;
    public StopBuildInput withId(String id) {
        this.id = id;
        return this;
    }
}