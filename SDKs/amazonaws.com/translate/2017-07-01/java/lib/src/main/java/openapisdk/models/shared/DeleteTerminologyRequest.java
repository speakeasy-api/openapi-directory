package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteTerminologyRequest {
    @JsonProperty("Name")
    public String name;
    public DeleteTerminologyRequest withName(String name) {
        this.name = name;
        return this;
    }
}