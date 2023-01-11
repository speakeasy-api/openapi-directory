package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLicenseUsageRequest {
    @JsonProperty("LicenseArn")
    public String licenseArn;
    public GetLicenseUsageRequest withLicenseArn(String licenseArn) {
        this.licenseArn = licenseArn;
        return this;
    }
}