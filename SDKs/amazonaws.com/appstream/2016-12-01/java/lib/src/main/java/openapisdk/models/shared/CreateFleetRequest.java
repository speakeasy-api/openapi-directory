package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFleetRequest {
    @JsonProperty("ComputeCapacity")
    public ComputeCapacity computeCapacity;
    public CreateFleetRequest withComputeCapacity(ComputeCapacity computeCapacity) {
        this.computeCapacity = computeCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateFleetRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisconnectTimeoutInSeconds")
    public Long disconnectTimeoutInSeconds;
    public CreateFleetRequest withDisconnectTimeoutInSeconds(Long disconnectTimeoutInSeconds) {
        this.disconnectTimeoutInSeconds = disconnectTimeoutInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayName")
    public String displayName;
    public CreateFleetRequest withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainJoinInfo")
    public DomainJoinInfo domainJoinInfo;
    public CreateFleetRequest withDomainJoinInfo(DomainJoinInfo domainJoinInfo) {
        this.domainJoinInfo = domainJoinInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableDefaultInternetAccess")
    public Boolean enableDefaultInternetAccess;
    public CreateFleetRequest withEnableDefaultInternetAccess(Boolean enableDefaultInternetAccess) {
        this.enableDefaultInternetAccess = enableDefaultInternetAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetType")
    public FleetTypeEnum fleetType;
    public CreateFleetRequest withFleetType(FleetTypeEnum fleetType) {
        this.fleetType = fleetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IamRoleArn")
    public String iamRoleArn;
    public CreateFleetRequest withIamRoleArn(String iamRoleArn) {
        this.iamRoleArn = iamRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdleDisconnectTimeoutInSeconds")
    public Long idleDisconnectTimeoutInSeconds;
    public CreateFleetRequest withIdleDisconnectTimeoutInSeconds(Long idleDisconnectTimeoutInSeconds) {
        this.idleDisconnectTimeoutInSeconds = idleDisconnectTimeoutInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageArn")
    public String imageArn;
    public CreateFleetRequest withImageArn(String imageArn) {
        this.imageArn = imageArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageName")
    public String imageName;
    public CreateFleetRequest withImageName(String imageName) {
        this.imageName = imageName;
        return this;
    }
    @JsonProperty("InstanceType")
    public String instanceType;
    public CreateFleetRequest withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxUserDurationInSeconds")
    public Long maxUserDurationInSeconds;
    public CreateFleetRequest withMaxUserDurationInSeconds(Long maxUserDurationInSeconds) {
        this.maxUserDurationInSeconds = maxUserDurationInSeconds;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateFleetRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamView")
    public StreamViewEnum streamView;
    public CreateFleetRequest withStreamView(StreamViewEnum streamView) {
        this.streamView = streamView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateFleetRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcConfig")
    public VpcConfig vpcConfig;
    public CreateFleetRequest withVpcConfig(VpcConfig vpcConfig) {
        this.vpcConfig = vpcConfig;
        return this;
    }
}