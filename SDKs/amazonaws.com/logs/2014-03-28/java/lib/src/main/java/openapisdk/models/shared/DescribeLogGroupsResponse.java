package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeLogGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logGroups")
    public LogGroup[] logGroups;
    public DescribeLogGroupsResponse withLogGroups(LogGroup[] logGroups) {
        this.logGroups = logGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeLogGroupsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}