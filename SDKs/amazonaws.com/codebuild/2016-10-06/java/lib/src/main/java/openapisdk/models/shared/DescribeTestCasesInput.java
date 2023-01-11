package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeTestCasesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public TestCaseFilter filter;
    public DescribeTestCasesInput withFilter(TestCaseFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeTestCasesInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeTestCasesInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("reportArn")
    public String reportArn;
    public DescribeTestCasesInput withReportArn(String reportArn) {
        this.reportArn = reportArn;
        return this;
    }
}