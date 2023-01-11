package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StudioComponentConfiguration
 * The configuration of the studio component, based on component type.
**/
public class StudioComponentConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeDirectoryConfiguration")
    public ActiveDirectoryConfiguration activeDirectoryConfiguration;
    public StudioComponentConfiguration withActiveDirectoryConfiguration(ActiveDirectoryConfiguration activeDirectoryConfiguration) {
        this.activeDirectoryConfiguration = activeDirectoryConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeFarmConfiguration")
    public ComputeFarmConfiguration computeFarmConfiguration;
    public StudioComponentConfiguration withComputeFarmConfiguration(ComputeFarmConfiguration computeFarmConfiguration) {
        this.computeFarmConfiguration = computeFarmConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licenseServiceConfiguration")
    public LicenseServiceConfiguration licenseServiceConfiguration;
    public StudioComponentConfiguration withLicenseServiceConfiguration(LicenseServiceConfiguration licenseServiceConfiguration) {
        this.licenseServiceConfiguration = licenseServiceConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharedFileSystemConfiguration")
    public SharedFileSystemConfiguration sharedFileSystemConfiguration;
    public StudioComponentConfiguration withSharedFileSystemConfiguration(SharedFileSystemConfiguration sharedFileSystemConfiguration) {
        this.sharedFileSystemConfiguration = sharedFileSystemConfiguration;
        return this;
    }
}