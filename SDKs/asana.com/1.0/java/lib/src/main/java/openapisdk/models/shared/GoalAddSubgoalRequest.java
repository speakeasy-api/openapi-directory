package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoalAddSubgoalRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insert_after")
    public String insertAfter;
    public GoalAddSubgoalRequest withInsertAfter(String insertAfter) {
        this.insertAfter = insertAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insert_before")
    public String insertBefore;
    public GoalAddSubgoalRequest withInsertBefore(String insertBefore) {
        this.insertBefore = insertBefore;
        return this;
    }
    @JsonProperty("subgoal")
    public String subgoal;
    public GoalAddSubgoalRequest withSubgoal(String subgoal) {
        this.subgoal = subgoal;
        return this;
    }
}