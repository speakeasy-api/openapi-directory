package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeProblemResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Problem")
    public Problem problem;
    public DescribeProblemResponse withProblem(Problem problem) {
        this.problem = problem;
        return this;
    }
}