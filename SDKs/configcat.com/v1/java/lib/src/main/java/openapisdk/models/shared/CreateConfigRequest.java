package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateConfigRequest {
    @JsonProperty("name")
    public String name;
    public CreateConfigRequest withName(String name) {
        this.name = name;
        return this;
    }
}