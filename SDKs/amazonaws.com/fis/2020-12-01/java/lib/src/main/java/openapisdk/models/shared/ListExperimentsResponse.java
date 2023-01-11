package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListExperimentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("experiments")
    public ExperimentSummary[] experiments;
    public ListExperimentsResponse withExperiments(ExperimentSummary[] experiments) {
        this.experiments = experiments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListExperimentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}