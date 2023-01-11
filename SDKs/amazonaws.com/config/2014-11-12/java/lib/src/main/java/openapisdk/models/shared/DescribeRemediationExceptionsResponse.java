package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRemediationExceptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeRemediationExceptionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemediationExceptions")
    public RemediationException[] remediationExceptions;
    public DescribeRemediationExceptionsResponse withRemediationExceptions(RemediationException[] remediationExceptions) {
        this.remediationExceptions = remediationExceptions;
        return this;
    }
}