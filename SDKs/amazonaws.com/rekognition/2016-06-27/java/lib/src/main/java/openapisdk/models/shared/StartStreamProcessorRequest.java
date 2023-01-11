package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartStreamProcessorRequest {
    @JsonProperty("Name")
    public String name;
    public StartStreamProcessorRequest withName(String name) {
        this.name = name;
        return this;
    }
}