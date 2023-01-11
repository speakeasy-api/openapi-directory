package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MeUser {
    @JsonProperty("email")
    public String email;
    public MeUser withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public MeUser withId(Long id) {
        this.id = id;
        return this;
    }
}