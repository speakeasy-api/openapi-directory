package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServiceInput {
    @JsonProperty("name")
    public String name;
    public GetServiceInput withName(String name) {
        this.name = name;
        return this;
    }
}