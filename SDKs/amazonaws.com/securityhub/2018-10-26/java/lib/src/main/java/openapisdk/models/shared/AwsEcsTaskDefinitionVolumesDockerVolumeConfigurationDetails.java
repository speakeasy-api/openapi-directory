package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails
 * Information about a Docker volume.
**/
public class AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Autoprovision")
    public Boolean autoprovision;
    public AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails withAutoprovision(Boolean autoprovision) {
        this.autoprovision = autoprovision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Driver")
    public String driver;
    public AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails withDriver(String driver) {
        this.driver = driver;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DriverOpts")
    public java.util.Map<String, String> driverOpts;
    public AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails withDriverOpts(java.util.Map<String, String> driverOpts) {
        this.driverOpts = driverOpts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Labels")
    public java.util.Map<String, String> labels;
    public AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Scope")
    public String scope;
    public AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails withScope(String scope) {
        this.scope = scope;
        return this;
    }
}