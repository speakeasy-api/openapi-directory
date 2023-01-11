package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UniqueProblem
 * A collection of one or more problems, grouped by their result.
**/
public class UniqueProblem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public UniqueProblem withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("problems")
    public Problem[] problems;
    public UniqueProblem withProblems(Problem[] problems) {
        this.problems = problems;
        return this;
    }
}