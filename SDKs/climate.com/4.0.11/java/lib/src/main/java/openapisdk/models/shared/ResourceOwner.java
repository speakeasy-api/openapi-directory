package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResourceOwner {
    @JsonProperty("email")
    public String email;
    public ResourceOwner withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ResourceOwner withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ResourceOwner withName(String name) {
        this.name = name;
        return this;
    }
}