package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReportContext
 * Details of the license configuration that this generator reports on.
**/
public class ReportContext {
    @JsonProperty("licenseConfigurationArns")
    public String[] licenseConfigurationArns;
    public ReportContext withLicenseConfigurationArns(String[] licenseConfigurationArns) {
        this.licenseConfigurationArns = licenseConfigurationArns;
        return this;
    }
}