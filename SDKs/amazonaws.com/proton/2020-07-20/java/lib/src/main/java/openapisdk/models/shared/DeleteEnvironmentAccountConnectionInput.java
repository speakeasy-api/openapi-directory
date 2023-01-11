package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteEnvironmentAccountConnectionInput {
    @JsonProperty("id")
    public String id;
    public DeleteEnvironmentAccountConnectionInput withId(String id) {
        this.id = id;
        return this;
    }
}