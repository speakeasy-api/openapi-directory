package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSolutionVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("solutionVersion")
    public SolutionVersion solutionVersion;
    public DescribeSolutionVersionResponse withSolutionVersion(SolutionVersion solutionVersion) {
        this.solutionVersion = solutionVersion;
        return this;
    }
}