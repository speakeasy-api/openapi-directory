package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaContainerParams
 * Contains information about a container in which Lambda functions run on Greengrass core devices.
**/
public class LambdaContainerParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public LambdaDeviceMount[] devices;
    public LambdaContainerParams withDevices(LambdaDeviceMount[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memorySizeInKB")
    public Long memorySizeInKB;
    public LambdaContainerParams withMemorySizeInKb(Long memorySizeInKB) {
        this.memorySizeInKB = memorySizeInKB;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mountROSysfs")
    public Boolean mountROSysfs;
    public LambdaContainerParams withMountRoSysfs(Boolean mountROSysfs) {
        this.mountROSysfs = mountROSysfs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public LambdaVolumeMount[] volumes;
    public LambdaContainerParams withVolumes(LambdaVolumeMount[] volumes) {
        this.volumes = volumes;
        return this;
    }
}