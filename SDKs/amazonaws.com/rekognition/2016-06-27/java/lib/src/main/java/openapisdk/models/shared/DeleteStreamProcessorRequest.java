package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteStreamProcessorRequest {
    @JsonProperty("Name")
    public String name;
    public DeleteStreamProcessorRequest withName(String name) {
        this.name = name;
        return this;
    }
}