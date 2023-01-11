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
 * ImageBuilder
 * Describes a virtual machine that is used to create an image. 
**/
public class ImageBuilder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessEndpoints")
    public AccessEndpoint[] accessEndpoints;
    public ImageBuilder withAccessEndpoints(AccessEndpoint[] accessEndpoints) {
        this.accessEndpoints = accessEndpoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppstreamAgentVersion")
    public String appstreamAgentVersion;
    public ImageBuilder withAppstreamAgentVersion(String appstreamAgentVersion) {
        this.appstreamAgentVersion = appstreamAgentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public ImageBuilder withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedTime")
    public OffsetDateTime createdTime;
    public ImageBuilder withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public ImageBuilder withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayName")
    public String displayName;
    public ImageBuilder withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainJoinInfo")
    public DomainJoinInfo domainJoinInfo;
    public ImageBuilder withDomainJoinInfo(DomainJoinInfo domainJoinInfo) {
        this.domainJoinInfo = domainJoinInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableDefaultInternetAccess")
    public Boolean enableDefaultInternetAccess;
    public ImageBuilder withEnableDefaultInternetAccess(Boolean enableDefaultInternetAccess) {
        this.enableDefaultInternetAccess = enableDefaultInternetAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IamRoleArn")
    public String iamRoleArn;
    public ImageBuilder withIamRoleArn(String iamRoleArn) {
        this.iamRoleArn = iamRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageArn")
    public String imageArn;
    public ImageBuilder withImageArn(String imageArn) {
        this.imageArn = imageArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageBuilderErrors")
    public ResourceError[] imageBuilderErrors;
    public ImageBuilder withImageBuilderErrors(ResourceError[] imageBuilderErrors) {
        this.imageBuilderErrors = imageBuilderErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceType")
    public String instanceType;
    public ImageBuilder withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public ImageBuilder withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkAccessConfiguration")
    public NetworkAccessConfiguration networkAccessConfiguration;
    public ImageBuilder withNetworkAccessConfiguration(NetworkAccessConfiguration networkAccessConfiguration) {
        this.networkAccessConfiguration = networkAccessConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Platform")
    public PlatformTypeEnum platform;
    public ImageBuilder withPlatform(PlatformTypeEnum platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public ImageBuilderStateEnum state;
    public ImageBuilder withState(ImageBuilderStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateChangeReason")
    public ImageBuilderStateChangeReason stateChangeReason;
    public ImageBuilder withStateChangeReason(ImageBuilderStateChangeReason stateChangeReason) {
        this.stateChangeReason = stateChangeReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcConfig")
    public VpcConfig vpcConfig;
    public ImageBuilder withVpcConfig(VpcConfig vpcConfig) {
        this.vpcConfig = vpcConfig;
        return this;
    }
}