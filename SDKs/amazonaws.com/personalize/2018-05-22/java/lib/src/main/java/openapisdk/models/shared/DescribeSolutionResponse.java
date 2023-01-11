package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSolutionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("solution")
    public Solution solution;
    public DescribeSolutionResponse withSolution(Solution solution) {
        this.solution = solution;
        return this;
    }
}