package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoftwareInformation
 * Information about the software on the device.
**/
public class SoftwareInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installState")
    public String installState;
    public SoftwareInformation withInstallState(String installState) {
        this.installState = installState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installedVersion")
    public String installedVersion;
    public SoftwareInformation withInstalledVersion(String installedVersion) {
        this.installedVersion = installedVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installingVersion")
    public String installingVersion;
    public SoftwareInformation withInstallingVersion(String installingVersion) {
        this.installingVersion = installingVersion;
        return this;
    }
}