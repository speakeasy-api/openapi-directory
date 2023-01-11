package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteServiceInput {
    @JsonProperty("name")
    public String name;
    public DeleteServiceInput withName(String name) {
        this.name = name;
        return this;
    }
}