package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MountTargetDescription
 * Provides a description of a mount target.
**/
public class MountTargetDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZoneId")
    public String availabilityZoneId;
    public MountTargetDescription withAvailabilityZoneId(String availabilityZoneId) {
        this.availabilityZoneId = availabilityZoneId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZoneName")
    public String availabilityZoneName;
    public MountTargetDescription withAvailabilityZoneName(String availabilityZoneName) {
        this.availabilityZoneName = availabilityZoneName;
        return this;
    }
    @JsonProperty("FileSystemId")
    public String fileSystemId;
    public MountTargetDescription withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddress")
    public String ipAddress;
    public MountTargetDescription withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonProperty("LifeCycleState")
    public LifeCycleStateEnum lifeCycleState;
    public MountTargetDescription withLifeCycleState(LifeCycleStateEnum lifeCycleState) {
        this.lifeCycleState = lifeCycleState;
        return this;
    }
    @JsonProperty("MountTargetId")
    public String mountTargetId;
    public MountTargetDescription withMountTargetId(String mountTargetId) {
        this.mountTargetId = mountTargetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkInterfaceId")
    public String networkInterfaceId;
    public MountTargetDescription withNetworkInterfaceId(String networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnerId")
    public String ownerId;
    public MountTargetDescription withOwnerId(String ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    @JsonProperty("SubnetId")
    public String subnetId;
    public MountTargetDescription withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public MountTargetDescription withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}