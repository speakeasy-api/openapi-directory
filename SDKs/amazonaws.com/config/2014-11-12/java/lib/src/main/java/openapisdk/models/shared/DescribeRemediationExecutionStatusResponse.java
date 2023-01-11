package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRemediationExecutionStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeRemediationExecutionStatusResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemediationExecutionStatuses")
    public RemediationExecutionStatus[] remediationExecutionStatuses;
    public DescribeRemediationExecutionStatusResponse withRemediationExecutionStatuses(RemediationExecutionStatus[] remediationExecutionStatuses) {
        this.remediationExecutionStatuses = remediationExecutionStatuses;
        return this;
    }
}