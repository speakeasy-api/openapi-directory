package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsCreateMembershipRequestBody {
    @JsonProperty("email")
    public String email;
    public TeamsCreateMembershipRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TeamsCreateMembershipRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("roles")
    public String[] roles;
    public TeamsCreateMembershipRequestBody withRoles(String[] roles) {
        this.roles = roles;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public TeamsCreateMembershipRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
}