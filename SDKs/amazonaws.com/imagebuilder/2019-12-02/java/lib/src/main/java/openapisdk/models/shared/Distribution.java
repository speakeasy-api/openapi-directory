package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Distribution
 *  Defines the settings for a specific Region.
**/
public class Distribution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amiDistributionConfiguration")
    public AmiDistributionConfiguration amiDistributionConfiguration;
    public Distribution withAmiDistributionConfiguration(AmiDistributionConfiguration amiDistributionConfiguration) {
        this.amiDistributionConfiguration = amiDistributionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerDistributionConfiguration")
    public ContainerDistributionConfiguration containerDistributionConfiguration;
    public Distribution withContainerDistributionConfiguration(ContainerDistributionConfiguration containerDistributionConfiguration) {
        this.containerDistributionConfiguration = containerDistributionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchTemplateConfigurations")
    public LaunchTemplateConfiguration[] launchTemplateConfigurations;
    public Distribution withLaunchTemplateConfigurations(LaunchTemplateConfiguration[] launchTemplateConfigurations) {
        this.launchTemplateConfigurations = launchTemplateConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licenseConfigurationArns")
    public String[] licenseConfigurationArns;
    public Distribution withLicenseConfigurationArns(String[] licenseConfigurationArns) {
        this.licenseConfigurationArns = licenseConfigurationArns;
        return this;
    }
    @JsonProperty("region")
    public String region;
    public Distribution withRegion(String region) {
        this.region = region;
        return this;
    }
}