package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeProblemObservationsRequest {
    @JsonProperty("ProblemId")
    public String problemId;
    public DescribeProblemObservationsRequest withProblemId(String problemId) {
        this.problemId = problemId;
        return this;
    }
}