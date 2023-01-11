package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsCreateRequestBody {
    @JsonProperty("name")
    public String name;
    public TeamsCreateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public String[] roles;
    public TeamsCreateRequestBody withRoles(String[] roles) {
        this.roles = roles;
        return this;
    }
}