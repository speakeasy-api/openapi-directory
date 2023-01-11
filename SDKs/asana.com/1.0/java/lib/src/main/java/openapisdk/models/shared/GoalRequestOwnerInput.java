package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoalRequestOwnerInput
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
**/
public class GoalRequestOwnerInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoalRequestOwnerInput withName(String name) {
        this.name = name;
        return this;
    }
}