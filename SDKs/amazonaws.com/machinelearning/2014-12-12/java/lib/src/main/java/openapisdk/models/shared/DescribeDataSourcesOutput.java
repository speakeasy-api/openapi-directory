package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeDataSourcesOutput
 * Represents the query results from a <a>DescribeDataSources</a> operation. The content is essentially a list of <code>DataSource</code>.
**/
public class DescribeDataSourcesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeDataSourcesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Results")
    public DataSource[] results;
    public DescribeDataSourcesOutput withResults(DataSource[] results) {
        this.results = results;
        return this;
    }
}