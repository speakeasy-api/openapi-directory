package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLicenseConfigurationRequest {
    @JsonProperty("LicenseConfigurationArn")
    public String licenseConfigurationArn;
    public GetLicenseConfigurationRequest withLicenseConfigurationArn(String licenseConfigurationArn) {
        this.licenseConfigurationArn = licenseConfigurationArn;
        return this;
    }
}