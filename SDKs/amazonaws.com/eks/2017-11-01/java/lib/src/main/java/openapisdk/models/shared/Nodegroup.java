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
 * Nodegroup
 * An object representing an Amazon EKS managed node group.
**/
public class Nodegroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amiType")
    public AmiTypesEnum amiType;
    public Nodegroup withAmiType(AmiTypesEnum amiType) {
        this.amiType = amiType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacityType")
    public CapacityTypesEnum capacityType;
    public Nodegroup withCapacityType(CapacityTypesEnum capacityType) {
        this.capacityType = capacityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterName")
    public String clusterName;
    public Nodegroup withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Nodegroup withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskSize")
    public Long diskSize;
    public Nodegroup withDiskSize(Long diskSize) {
        this.diskSize = diskSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health")
    public NodegroupHealth health;
    public Nodegroup withHealth(NodegroupHealth health) {
        this.health = health;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceTypes")
    public String[] instanceTypes;
    public Nodegroup withInstanceTypes(String[] instanceTypes) {
        this.instanceTypes = instanceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Nodegroup withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchTemplate")
    public LaunchTemplateSpecification launchTemplate;
    public Nodegroup withLaunchTemplate(LaunchTemplateSpecification launchTemplate) {
        this.launchTemplate = launchTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modifiedAt")
    public OffsetDateTime modifiedAt;
    public Nodegroup withModifiedAt(OffsetDateTime modifiedAt) {
        this.modifiedAt = modifiedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeRole")
    public String nodeRole;
    public Nodegroup withNodeRole(String nodeRole) {
        this.nodeRole = nodeRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodegroupArn")
    public String nodegroupArn;
    public Nodegroup withNodegroupArn(String nodegroupArn) {
        this.nodegroupArn = nodegroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodegroupName")
    public String nodegroupName;
    public Nodegroup withNodegroupName(String nodegroupName) {
        this.nodegroupName = nodegroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseVersion")
    public String releaseVersion;
    public Nodegroup withReleaseVersion(String releaseVersion) {
        this.releaseVersion = releaseVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteAccess")
    public RemoteAccessConfig remoteAccess;
    public Nodegroup withRemoteAccess(RemoteAccessConfig remoteAccess) {
        this.remoteAccess = remoteAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public NodegroupResources resources;
    public Nodegroup withResources(NodegroupResources resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scalingConfig")
    public NodegroupScalingConfig scalingConfig;
    public Nodegroup withScalingConfig(NodegroupScalingConfig scalingConfig) {
        this.scalingConfig = scalingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public NodegroupStatusEnum status;
    public Nodegroup withStatus(NodegroupStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnets")
    public String[] subnets;
    public Nodegroup withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public Nodegroup withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taints")
    public Taint[] taints;
    public Nodegroup withTaints(Taint[] taints) {
        this.taints = taints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateConfig")
    public NodegroupUpdateConfig updateConfig;
    public Nodegroup withUpdateConfig(NodegroupUpdateConfig updateConfig) {
        this.updateConfig = updateConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public Nodegroup withVersion(String version) {
        this.version = version;
        return this;
    }
}