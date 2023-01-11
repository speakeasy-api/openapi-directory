package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteLicenseConfigurationRequest {
    @JsonProperty("LicenseConfigurationArn")
    public String licenseConfigurationArn;
    public DeleteLicenseConfigurationRequest withLicenseConfigurationArn(String licenseConfigurationArn) {
        this.licenseConfigurationArn = licenseConfigurationArn;
        return this;
    }
}