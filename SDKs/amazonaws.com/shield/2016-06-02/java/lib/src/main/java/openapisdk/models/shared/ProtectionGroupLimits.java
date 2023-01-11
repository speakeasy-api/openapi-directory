package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProtectionGroupLimits
 * Limits settings on protection groups for your subscription. 
**/
public class ProtectionGroupLimits {
    @JsonProperty("MaxProtectionGroups")
    public Long maxProtectionGroups;
    public ProtectionGroupLimits withMaxProtectionGroups(Long maxProtectionGroups) {
        this.maxProtectionGroups = maxProtectionGroups;
        return this;
    }
    @JsonProperty("PatternTypeLimits")
    public ProtectionGroupPatternTypeLimits patternTypeLimits;
    public ProtectionGroupLimits withPatternTypeLimits(ProtectionGroupPatternTypeLimits patternTypeLimits) {
        this.patternTypeLimits = patternTypeLimits;
        return this;
    }
}