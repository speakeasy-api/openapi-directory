package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteLogPatternRequest {
    @JsonProperty("PatternName")
    public String patternName;
    public DeleteLogPatternRequest withPatternName(String patternName) {
        this.patternName = patternName;
        return this;
    }
    @JsonProperty("PatternSetName")
    public String patternSetName;
    public DeleteLogPatternRequest withPatternSetName(String patternSetName) {
        this.patternSetName = patternSetName;
        return this;
    }
    @JsonProperty("ResourceGroupName")
    public String resourceGroupName;
    public DeleteLogPatternRequest withResourceGroupName(String resourceGroupName) {
        this.resourceGroupName = resourceGroupName;
        return this;
    }
}