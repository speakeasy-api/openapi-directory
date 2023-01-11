package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProtectionLimits
 * Limits settings on protections for your subscription. 
**/
public class ProtectionLimits {
    @JsonProperty("ProtectedResourceTypeLimits")
    public Limit[] protectedResourceTypeLimits;
    public ProtectionLimits withProtectedResourceTypeLimits(Limit[] protectedResourceTypeLimits) {
        this.protectedResourceTypeLimits = protectedResourceTypeLimits;
        return this;
    }
}