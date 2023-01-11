package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSystemInstanceRequest {
    @JsonProperty("id")
    public String id;
    public GetSystemInstanceRequest withId(String id) {
        this.id = id;
        return this;
    }
}