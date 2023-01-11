package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNodegroupRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amiType")
    public CreateNodegroupRequestBodyAmiTypeEnum amiType;
    public CreateNodegroupRequestBody withAmiType(CreateNodegroupRequestBodyAmiTypeEnum amiType) {
        this.amiType = amiType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacityType")
    public CreateNodegroupRequestBodyCapacityTypeEnum capacityType;
    public CreateNodegroupRequestBody withCapacityType(CreateNodegroupRequestBodyCapacityTypeEnum capacityType) {
        this.capacityType = capacityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public CreateNodegroupRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskSize")
    public Long diskSize;
    public CreateNodegroupRequestBody withDiskSize(Long diskSize) {
        this.diskSize = diskSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceTypes")
    public String[] instanceTypes;
    public CreateNodegroupRequestBody withInstanceTypes(String[] instanceTypes) {
        this.instanceTypes = instanceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public CreateNodegroupRequestBody withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchTemplate")
    public CreateNodegroupRequestBodyLaunchTemplate launchTemplate;
    public CreateNodegroupRequestBody withLaunchTemplate(CreateNodegroupRequestBodyLaunchTemplate launchTemplate) {
        this.launchTemplate = launchTemplate;
        return this;
    }
    @JsonProperty("nodeRole")
    public String nodeRole;
    public CreateNodegroupRequestBody withNodeRole(String nodeRole) {
        this.nodeRole = nodeRole;
        return this;
    }
    @JsonProperty("nodegroupName")
    public String nodegroupName;
    public CreateNodegroupRequestBody withNodegroupName(String nodegroupName) {
        this.nodegroupName = nodegroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseVersion")
    public String releaseVersion;
    public CreateNodegroupRequestBody withReleaseVersion(String releaseVersion) {
        this.releaseVersion = releaseVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteAccess")
    public CreateNodegroupRequestBodyRemoteAccess remoteAccess;
    public CreateNodegroupRequestBody withRemoteAccess(CreateNodegroupRequestBodyRemoteAccess remoteAccess) {
        this.remoteAccess = remoteAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scalingConfig")
    public CreateNodegroupRequestBodyScalingConfig scalingConfig;
    public CreateNodegroupRequestBody withScalingConfig(CreateNodegroupRequestBodyScalingConfig scalingConfig) {
        this.scalingConfig = scalingConfig;
        return this;
    }
    @JsonProperty("subnets")
    public String[] subnets;
    public CreateNodegroupRequestBody withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateNodegroupRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taints")
    public openapisdk.models.shared.Taint[] taints;
    public CreateNodegroupRequestBody withTaints(openapisdk.models.shared.Taint[] taints) {
        this.taints = taints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateConfig")
    public CreateNodegroupRequestBodyUpdateConfig updateConfig;
    public CreateNodegroupRequestBody withUpdateConfig(CreateNodegroupRequestBodyUpdateConfig updateConfig) {
        this.updateConfig = updateConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public CreateNodegroupRequestBody withVersion(String version) {
        this.version = version;
        return this;
    }
}