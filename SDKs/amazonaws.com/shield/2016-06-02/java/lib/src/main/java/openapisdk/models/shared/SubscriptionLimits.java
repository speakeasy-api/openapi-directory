package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SubscriptionLimits
 * Limits settings for your subscription. 
**/
public class SubscriptionLimits {
    @JsonProperty("ProtectionGroupLimits")
    public ProtectionGroupLimits protectionGroupLimits;
    public SubscriptionLimits withProtectionGroupLimits(ProtectionGroupLimits protectionGroupLimits) {
        this.protectionGroupLimits = protectionGroupLimits;
        return this;
    }
    @JsonProperty("ProtectionLimits")
    public ProtectionLimits protectionLimits;
    public SubscriptionLimits withProtectionLimits(ProtectionLimits protectionLimits) {
        this.protectionLimits = protectionLimits;
        return this;
    }
}