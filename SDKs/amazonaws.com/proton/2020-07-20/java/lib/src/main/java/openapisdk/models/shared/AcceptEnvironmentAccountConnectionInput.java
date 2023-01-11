package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AcceptEnvironmentAccountConnectionInput {
    @JsonProperty("id")
    public String id;
    public AcceptEnvironmentAccountConnectionInput withId(String id) {
        this.id = id;
        return this;
    }
}