package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails
 * A host device to expose to the container.
**/
public class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContainerPath")
    public String containerPath;
    public AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails withContainerPath(String containerPath) {
        this.containerPath = containerPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HostPath")
    public String hostPath;
    public AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails withHostPath(String hostPath) {
        this.hostPath = hostPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Permissions")
    public String[] permissions;
    public AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails withPermissions(String[] permissions) {
        this.permissions = permissions;
        return this;
    }
}