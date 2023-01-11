package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProtectionGroupPatternTypeLimits
 * Limits settings by pattern type in the protection groups for your subscription. 
**/
public class ProtectionGroupPatternTypeLimits {
    @JsonProperty("ArbitraryPatternLimits")
    public ProtectionGroupArbitraryPatternLimits arbitraryPatternLimits;
    public ProtectionGroupPatternTypeLimits withArbitraryPatternLimits(ProtectionGroupArbitraryPatternLimits arbitraryPatternLimits) {
        this.arbitraryPatternLimits = arbitraryPatternLimits;
        return this;
    }
}