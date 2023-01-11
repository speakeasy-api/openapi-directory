package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeLogPatternRequest {
    @JsonProperty("PatternName")
    public String patternName;
    public DescribeLogPatternRequest withPatternName(String patternName) {
        this.patternName = patternName;
        return this;
    }
    @JsonProperty("PatternSetName")
    public String patternSetName;
    public DescribeLogPatternRequest withPatternSetName(String patternSetName) {
        this.patternSetName = patternSetName;
        return this;
    }
    @JsonProperty("ResourceGroupName")
    public String resourceGroupName;
    public DescribeLogPatternRequest withResourceGroupName(String resourceGroupName) {
        this.resourceGroupName = resourceGroupName;
        return this;
    }
}