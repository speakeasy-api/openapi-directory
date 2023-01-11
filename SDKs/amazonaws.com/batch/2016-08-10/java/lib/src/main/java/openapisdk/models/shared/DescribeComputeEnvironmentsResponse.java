package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeComputeEnvironmentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeEnvironments")
    public ComputeEnvironmentDetail[] computeEnvironments;
    public DescribeComputeEnvironmentsResponse withComputeEnvironments(ComputeEnvironmentDetail[] computeEnvironments) {
        this.computeEnvironments = computeEnvironments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeComputeEnvironmentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}