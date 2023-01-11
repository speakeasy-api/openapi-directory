package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFleetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributesToDelete")
    public FleetAttributeEnum[] attributesToDelete;
    public UpdateFleetRequest withAttributesToDelete(FleetAttributeEnum[] attributesToDelete) {
        this.attributesToDelete = attributesToDelete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComputeCapacity")
    public ComputeCapacity computeCapacity;
    public UpdateFleetRequest withComputeCapacity(ComputeCapacity computeCapacity) {
        this.computeCapacity = computeCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeleteVpcConfig")
    public java.util.Map<String, Object> deleteVpcConfig;
    public UpdateFleetRequest withDeleteVpcConfig(java.util.Map<String, Object> deleteVpcConfig) {
        this.deleteVpcConfig = deleteVpcConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateFleetRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisconnectTimeoutInSeconds")
    public Long disconnectTimeoutInSeconds;
    public UpdateFleetRequest withDisconnectTimeoutInSeconds(Long disconnectTimeoutInSeconds) {
        this.disconnectTimeoutInSeconds = disconnectTimeoutInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayName")
    public String displayName;
    public UpdateFleetRequest withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainJoinInfo")
    public DomainJoinInfo domainJoinInfo;
    public UpdateFleetRequest withDomainJoinInfo(DomainJoinInfo domainJoinInfo) {
        this.domainJoinInfo = domainJoinInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableDefaultInternetAccess")
    public Boolean enableDefaultInternetAccess;
    public UpdateFleetRequest withEnableDefaultInternetAccess(Boolean enableDefaultInternetAccess) {
        this.enableDefaultInternetAccess = enableDefaultInternetAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IamRoleArn")
    public String iamRoleArn;
    public UpdateFleetRequest withIamRoleArn(String iamRoleArn) {
        this.iamRoleArn = iamRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdleDisconnectTimeoutInSeconds")
    public Long idleDisconnectTimeoutInSeconds;
    public UpdateFleetRequest withIdleDisconnectTimeoutInSeconds(Long idleDisconnectTimeoutInSeconds) {
        this.idleDisconnectTimeoutInSeconds = idleDisconnectTimeoutInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageArn")
    public String imageArn;
    public UpdateFleetRequest withImageArn(String imageArn) {
        this.imageArn = imageArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageName")
    public String imageName;
    public UpdateFleetRequest withImageName(String imageName) {
        this.imageName = imageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceType")
    public String instanceType;
    public UpdateFleetRequest withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxUserDurationInSeconds")
    public Long maxUserDurationInSeconds;
    public UpdateFleetRequest withMaxUserDurationInSeconds(Long maxUserDurationInSeconds) {
        this.maxUserDurationInSeconds = maxUserDurationInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateFleetRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamView")
    public StreamViewEnum streamView;
    public UpdateFleetRequest withStreamView(StreamViewEnum streamView) {
        this.streamView = streamView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcConfig")
    public VpcConfig vpcConfig;
    public UpdateFleetRequest withVpcConfig(VpcConfig vpcConfig) {
        this.vpcConfig = vpcConfig;
        return this;
    }
}