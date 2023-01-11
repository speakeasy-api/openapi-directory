package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopStreamProcessorRequest {
    @JsonProperty("Name")
    public String name;
    public StopStreamProcessorRequest withName(String name) {
        this.name = name;
        return this;
    }
}