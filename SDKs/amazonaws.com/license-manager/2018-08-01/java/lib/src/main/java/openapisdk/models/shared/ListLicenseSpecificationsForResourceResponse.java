package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLicenseSpecificationsForResourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseSpecifications")
    public LicenseSpecification[] licenseSpecifications;
    public ListLicenseSpecificationsForResourceResponse withLicenseSpecifications(LicenseSpecification[] licenseSpecifications) {
        this.licenseSpecifications = licenseSpecifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListLicenseSpecificationsForResourceResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}