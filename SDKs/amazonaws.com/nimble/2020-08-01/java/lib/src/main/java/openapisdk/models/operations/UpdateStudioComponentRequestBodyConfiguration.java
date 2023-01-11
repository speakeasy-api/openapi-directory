package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateStudioComponentRequestBodyConfiguration
 * The configuration of the studio component, based on component type.
**/
public class UpdateStudioComponentRequestBodyConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeDirectoryConfiguration")
    public openapisdk.models.shared.ActiveDirectoryConfiguration activeDirectoryConfiguration;
    public UpdateStudioComponentRequestBodyConfiguration withActiveDirectoryConfiguration(openapisdk.models.shared.ActiveDirectoryConfiguration activeDirectoryConfiguration) {
        this.activeDirectoryConfiguration = activeDirectoryConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeFarmConfiguration")
    public openapisdk.models.shared.ComputeFarmConfiguration computeFarmConfiguration;
    public UpdateStudioComponentRequestBodyConfiguration withComputeFarmConfiguration(openapisdk.models.shared.ComputeFarmConfiguration computeFarmConfiguration) {
        this.computeFarmConfiguration = computeFarmConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licenseServiceConfiguration")
    public openapisdk.models.shared.LicenseServiceConfiguration licenseServiceConfiguration;
    public UpdateStudioComponentRequestBodyConfiguration withLicenseServiceConfiguration(openapisdk.models.shared.LicenseServiceConfiguration licenseServiceConfiguration) {
        this.licenseServiceConfiguration = licenseServiceConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharedFileSystemConfiguration")
    public openapisdk.models.shared.SharedFileSystemConfiguration sharedFileSystemConfiguration;
    public UpdateStudioComponentRequestBodyConfiguration withSharedFileSystemConfiguration(openapisdk.models.shared.SharedFileSystemConfiguration sharedFileSystemConfiguration) {
        this.sharedFileSystemConfiguration = sharedFileSystemConfiguration;
        return this;
    }
}