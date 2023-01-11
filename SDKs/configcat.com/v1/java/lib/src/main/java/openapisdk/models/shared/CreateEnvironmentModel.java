package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateEnvironmentModel {
    @JsonProperty("name")
    public String name;
    public CreateEnvironmentModel withName(String name) {
        this.name = name;
        return this;
    }
}