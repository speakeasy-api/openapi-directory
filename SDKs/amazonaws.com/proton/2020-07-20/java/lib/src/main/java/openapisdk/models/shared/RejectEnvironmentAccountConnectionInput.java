package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RejectEnvironmentAccountConnectionInput {
    @JsonProperty("id")
    public String id;
    public RejectEnvironmentAccountConnectionInput withId(String id) {
        this.id = id;
        return this;
    }
}