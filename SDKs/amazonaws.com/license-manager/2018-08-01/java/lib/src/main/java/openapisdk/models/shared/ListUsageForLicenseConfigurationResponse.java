package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUsageForLicenseConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseConfigurationUsageList")
    public LicenseConfigurationUsage[] licenseConfigurationUsageList;
    public ListUsageForLicenseConfigurationResponse withLicenseConfigurationUsageList(LicenseConfigurationUsage[] licenseConfigurationUsageList) {
        this.licenseConfigurationUsageList = licenseConfigurationUsageList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListUsageForLicenseConfigurationResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}