package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoalRequestTeamInput
 * A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
**/
public class GoalRequestTeamInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoalRequestTeamInput withName(String name) {
        this.name = name;
        return this;
    }
}