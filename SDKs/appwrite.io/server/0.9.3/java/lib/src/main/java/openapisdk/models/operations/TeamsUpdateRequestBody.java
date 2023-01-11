package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamsUpdateRequestBody {
    @JsonProperty("name")
    public String name;
    public TeamsUpdateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}