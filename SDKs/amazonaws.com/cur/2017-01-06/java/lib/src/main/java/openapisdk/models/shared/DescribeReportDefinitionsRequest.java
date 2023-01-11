package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeReportDefinitionsRequest
 * Requests a list of AWS Cost and Usage reports owned by the account.
**/
public class DescribeReportDefinitionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeReportDefinitionsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeReportDefinitionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}