package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEnvironmentAccountConnectionInput {
    @JsonProperty("id")
    public String id;
    public GetEnvironmentAccountConnectionInput withId(String id) {
        this.id = id;
        return this;
    }
}