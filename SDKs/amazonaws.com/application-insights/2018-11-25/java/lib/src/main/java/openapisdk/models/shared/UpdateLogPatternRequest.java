package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateLogPatternRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Pattern")
    public String pattern;
    public UpdateLogPatternRequest withPattern(String pattern) {
        this.pattern = pattern;
        return this;
    }
    @JsonProperty("PatternName")
    public String patternName;
    public UpdateLogPatternRequest withPatternName(String patternName) {
        this.patternName = patternName;
        return this;
    }
    @JsonProperty("PatternSetName")
    public String patternSetName;
    public UpdateLogPatternRequest withPatternSetName(String patternSetName) {
        this.patternSetName = patternSetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rank")
    public Long rank;
    public UpdateLogPatternRequest withRank(Long rank) {
        this.rank = rank;
        return this;
    }
    @JsonProperty("ResourceGroupName")
    public String resourceGroupName;
    public UpdateLogPatternRequest withResourceGroupName(String resourceGroupName) {
        this.resourceGroupName = resourceGroupName;
        return this;
    }
}