package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GoalRemoveSubgoalRequest {
    @JsonProperty("subgoal")
    public String subgoal;
    public GoalRemoveSubgoalRequest withSubgoal(String subgoal) {
        this.subgoal = subgoal;
        return this;
    }
}