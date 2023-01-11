package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeLogPatternResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogPattern")
    public LogPattern logPattern;
    public DescribeLogPatternResponse withLogPattern(LogPattern logPattern) {
        this.logPattern = logPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceGroupName")
    public String resourceGroupName;
    public DescribeLogPatternResponse withResourceGroupName(String resourceGroupName) {
        this.resourceGroupName = resourceGroupName;
        return this;
    }
}