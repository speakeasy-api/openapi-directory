package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LicenseUsage
 * Describes the entitlement usage associated with a license.
**/
public class LicenseUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntitlementUsages")
    public EntitlementUsage[] entitlementUsages;
    public LicenseUsage withEntitlementUsages(EntitlementUsage[] entitlementUsages) {
        this.entitlementUsages = entitlementUsages;
        return this;
    }
}