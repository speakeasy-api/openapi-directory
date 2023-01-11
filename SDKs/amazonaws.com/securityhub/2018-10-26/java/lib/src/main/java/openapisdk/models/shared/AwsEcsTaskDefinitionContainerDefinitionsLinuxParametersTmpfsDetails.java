package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails
 * The container path, mount options, and size (in MiB) of a tmpfs mount.
**/
public class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContainerPath")
    public String containerPath;
    public AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails withContainerPath(String containerPath) {
        this.containerPath = containerPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MountOptions")
    public String[] mountOptions;
    public AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails withMountOptions(String[] mountOptions) {
        this.mountOptions = mountOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Size")
    public Long size;
    public AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails withSize(Long size) {
        this.size = size;
        return this;
    }
}