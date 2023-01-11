package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEnvironmentInput {
    @JsonProperty("name")
    public String name;
    public GetEnvironmentInput withName(String name) {
        this.name = name;
        return this;
    }
}