package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCanaryRunsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CanaryRuns")
    public CanaryRun[] canaryRuns;
    public GetCanaryRunsResponse withCanaryRuns(CanaryRun[] canaryRuns) {
        this.canaryRuns = canaryRuns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetCanaryRunsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}