package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLicenseConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseConfigurationArn")
    public String licenseConfigurationArn;
    public CreateLicenseConfigurationResponse withLicenseConfigurationArn(String licenseConfigurationArn) {
        this.licenseConfigurationArn = licenseConfigurationArn;
        return this;
    }
}