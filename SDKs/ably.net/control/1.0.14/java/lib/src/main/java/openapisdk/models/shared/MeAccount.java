package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MeAccount {
    @JsonProperty("id")
    public String id;
    public MeAccount withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public MeAccount withName(String name) {
        this.name = name;
        return this;
    }
}