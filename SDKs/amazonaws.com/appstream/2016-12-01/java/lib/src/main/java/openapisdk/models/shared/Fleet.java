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
 * Fleet
 * Describes a fleet.
**/
public class Fleet {
    @JsonProperty("Arn")
    public String arn;
    public Fleet withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("ComputeCapacityStatus")
    public ComputeCapacityStatus computeCapacityStatus;
    public Fleet withComputeCapacityStatus(ComputeCapacityStatus computeCapacityStatus) {
        this.computeCapacityStatus = computeCapacityStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedTime")
    public OffsetDateTime createdTime;
    public Fleet withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Fleet withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisconnectTimeoutInSeconds")
    public Long disconnectTimeoutInSeconds;
    public Fleet withDisconnectTimeoutInSeconds(Long disconnectTimeoutInSeconds) {
        this.disconnectTimeoutInSeconds = disconnectTimeoutInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayName")
    public String displayName;
    public Fleet withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainJoinInfo")
    public DomainJoinInfo domainJoinInfo;
    public Fleet withDomainJoinInfo(DomainJoinInfo domainJoinInfo) {
        this.domainJoinInfo = domainJoinInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableDefaultInternetAccess")
    public Boolean enableDefaultInternetAccess;
    public Fleet withEnableDefaultInternetAccess(Boolean enableDefaultInternetAccess) {
        this.enableDefaultInternetAccess = enableDefaultInternetAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetErrors")
    public FleetError[] fleetErrors;
    public Fleet withFleetErrors(FleetError[] fleetErrors) {
        this.fleetErrors = fleetErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetType")
    public FleetTypeEnum fleetType;
    public Fleet withFleetType(FleetTypeEnum fleetType) {
        this.fleetType = fleetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IamRoleArn")
    public String iamRoleArn;
    public Fleet withIamRoleArn(String iamRoleArn) {
        this.iamRoleArn = iamRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdleDisconnectTimeoutInSeconds")
    public Long idleDisconnectTimeoutInSeconds;
    public Fleet withIdleDisconnectTimeoutInSeconds(Long idleDisconnectTimeoutInSeconds) {
        this.idleDisconnectTimeoutInSeconds = idleDisconnectTimeoutInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageArn")
    public String imageArn;
    public Fleet withImageArn(String imageArn) {
        this.imageArn = imageArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageName")
    public String imageName;
    public Fleet withImageName(String imageName) {
        this.imageName = imageName;
        return this;
    }
    @JsonProperty("InstanceType")
    public String instanceType;
    public Fleet withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxUserDurationInSeconds")
    public Long maxUserDurationInSeconds;
    public Fleet withMaxUserDurationInSeconds(Long maxUserDurationInSeconds) {
        this.maxUserDurationInSeconds = maxUserDurationInSeconds;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public Fleet withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("State")
    public FleetStateEnum state;
    public Fleet withState(FleetStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamView")
    public StreamViewEnum streamView;
    public Fleet withStreamView(StreamViewEnum streamView) {
        this.streamView = streamView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcConfig")
    public VpcConfig vpcConfig;
    public Fleet withVpcConfig(VpcConfig vpcConfig) {
        this.vpcConfig = vpcConfig;
        return this;
    }
}