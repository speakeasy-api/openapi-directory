package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLicenseUsageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseUsage")
    public LicenseUsage licenseUsage;
    public GetLicenseUsageResponse withLicenseUsage(LicenseUsage licenseUsage) {
        this.licenseUsage = licenseUsage;
        return this;
    }
}