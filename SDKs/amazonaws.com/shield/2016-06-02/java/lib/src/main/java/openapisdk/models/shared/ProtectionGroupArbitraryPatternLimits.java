package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProtectionGroupArbitraryPatternLimits
 * Limits settings on protection groups with arbitrary pattern type. 
**/
public class ProtectionGroupArbitraryPatternLimits {
    @JsonProperty("MaxMembers")
    public Long maxMembers;
    public ProtectionGroupArbitraryPatternLimits withMaxMembers(Long maxMembers) {
        this.maxMembers = maxMembers;
        return this;
    }
}