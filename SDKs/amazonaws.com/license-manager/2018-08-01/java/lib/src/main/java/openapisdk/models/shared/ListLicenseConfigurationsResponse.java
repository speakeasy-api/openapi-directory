package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLicenseConfigurationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseConfigurations")
    public LicenseConfiguration[] licenseConfigurations;
    public ListLicenseConfigurationsResponse withLicenseConfigurations(LicenseConfiguration[] licenseConfigurations) {
        this.licenseConfigurations = licenseConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListLicenseConfigurationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}