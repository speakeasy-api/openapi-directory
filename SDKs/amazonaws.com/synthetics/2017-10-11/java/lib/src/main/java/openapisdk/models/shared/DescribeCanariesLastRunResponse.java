package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCanariesLastRunResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CanariesLastRun")
    public CanaryLastRun[] canariesLastRun;
    public DescribeCanariesLastRunResponse withCanariesLastRun(CanaryLastRun[] canariesLastRun) {
        this.canariesLastRun = canariesLastRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeCanariesLastRunResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}