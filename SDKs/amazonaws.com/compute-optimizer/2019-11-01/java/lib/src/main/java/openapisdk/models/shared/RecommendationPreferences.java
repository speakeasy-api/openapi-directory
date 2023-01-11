package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecommendationPreferences
 * Describes preferences for recommendations.
**/
public class RecommendationPreferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuVendorArchitectures")
    public CpuVendorArchitectureEnum[] cpuVendorArchitectures;
    public RecommendationPreferences withCpuVendorArchitectures(CpuVendorArchitectureEnum[] cpuVendorArchitectures) {
        this.cpuVendorArchitectures = cpuVendorArchitectures;
        return this;
    }
}