package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLogPatternsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogPatterns")
    public LogPattern[] logPatterns;
    public ListLogPatternsResponse withLogPatterns(LogPattern[] logPatterns) {
        this.logPatterns = logPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListLogPatternsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceGroupName")
    public String resourceGroupName;
    public ListLogPatternsResponse withResourceGroupName(String resourceGroupName) {
        this.resourceGroupName = resourceGroupName;
        return this;
    }
}