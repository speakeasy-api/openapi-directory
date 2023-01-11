package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserCompactInput
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
**/
public class UserCompactInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UserCompactInput withName(String name) {
        this.name = name;
        return this;
    }
}