package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Instance
 * The description of an instance. Currently, Amazon EC2 instances are the only supported instance type.
**/
public class Instance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amiLaunchIndex")
    public Long amiLaunchIndex;
    public Instance withAmiLaunchIndex(Long amiLaunchIndex) {
        this.amiLaunchIndex = amiLaunchIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockDeviceMappings")
    public InstanceBlockDeviceMapping[] blockDeviceMappings;
    public Instance withBlockDeviceMappings(InstanceBlockDeviceMapping[] blockDeviceMappings) {
        this.blockDeviceMappings = blockDeviceMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuOptions")
    public CpuOptions cpuOptions;
    public Instance withCpuOptions(CpuOptions cpuOptions) {
        this.cpuOptions = cpuOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Instance withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageId")
    public String imageId;
    public Instance withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceId")
    public String instanceId;
    public Instance withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceType")
    public String instanceType;
    public Instance withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateIpAddress")
    public String privateIpAddress;
    public Instance withPrivateIpAddress(String privateIpAddress) {
        this.privateIpAddress = privateIpAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicIpAddress")
    public String publicIpAddress;
    public Instance withPublicIpAddress(String publicIpAddress) {
        this.publicIpAddress = publicIpAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootDeviceName")
    public String rootDeviceName;
    public Instance withRootDeviceName(String rootDeviceName) {
        this.rootDeviceName = rootDeviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityGroups")
    public SecurityGroupIdentifier[] securityGroups;
    public Instance withSecurityGroups(SecurityGroupIdentifier[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public InstanceState state;
    public Instance withState(InstanceState state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public Instance withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}