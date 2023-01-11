package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeProblemRequest {
    @JsonProperty("ProblemId")
    public String problemId;
    public DescribeProblemRequest withProblemId(String problemId) {
        this.problemId = problemId;
        return this;
    }
}