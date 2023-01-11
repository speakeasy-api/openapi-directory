package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateComputeEnvironmentRequestBodyComputeResources
 * An object representing an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
**/
public class CreateComputeEnvironmentRequestBodyComputeResources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allocationStrategy")
    public openapisdk.models.shared.CrAllocationStrategyEnum allocationStrategy;
    public CreateComputeEnvironmentRequestBodyComputeResources withAllocationStrategy(openapisdk.models.shared.CrAllocationStrategyEnum allocationStrategy) {
        this.allocationStrategy = allocationStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidPercentage")
    public Long bidPercentage;
    public CreateComputeEnvironmentRequestBodyComputeResources withBidPercentage(Long bidPercentage) {
        this.bidPercentage = bidPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desiredvCpus")
    public Long desiredvCpus;
    public CreateComputeEnvironmentRequestBodyComputeResources withDesiredvCpus(Long desiredvCpus) {
        this.desiredvCpus = desiredvCpus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2Configuration")
    public openapisdk.models.shared.Ec2Configuration[] ec2Configuration;
    public CreateComputeEnvironmentRequestBodyComputeResources withEc2Configuration(openapisdk.models.shared.Ec2Configuration[] ec2Configuration) {
        this.ec2Configuration = ec2Configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2KeyPair")
    public String ec2KeyPair;
    public CreateComputeEnvironmentRequestBodyComputeResources withEc2KeyPair(String ec2KeyPair) {
        this.ec2KeyPair = ec2KeyPair;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageId")
    public java.util.Map<String, Object> imageId;
    public CreateComputeEnvironmentRequestBodyComputeResources withImageId(java.util.Map<String, Object> imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceRole")
    public String instanceRole;
    public CreateComputeEnvironmentRequestBodyComputeResources withInstanceRole(String instanceRole) {
        this.instanceRole = instanceRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceTypes")
    public String[] instanceTypes;
    public CreateComputeEnvironmentRequestBodyComputeResources withInstanceTypes(String[] instanceTypes) {
        this.instanceTypes = instanceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchTemplate")
    public openapisdk.models.shared.LaunchTemplateSpecification launchTemplate;
    public CreateComputeEnvironmentRequestBodyComputeResources withLaunchTemplate(openapisdk.models.shared.LaunchTemplateSpecification launchTemplate) {
        this.launchTemplate = launchTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxvCpus")
    public Long maxvCpus;
    public CreateComputeEnvironmentRequestBodyComputeResources withMaxvCpus(Long maxvCpus) {
        this.maxvCpus = maxvCpus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minvCpus")
    public Long minvCpus;
    public CreateComputeEnvironmentRequestBodyComputeResources withMinvCpus(Long minvCpus) {
        this.minvCpus = minvCpus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementGroup")
    public String placementGroup;
    public CreateComputeEnvironmentRequestBodyComputeResources withPlacementGroup(String placementGroup) {
        this.placementGroup = placementGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityGroupIds")
    public String[] securityGroupIds;
    public CreateComputeEnvironmentRequestBodyComputeResources withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spotIamFleetRole")
    public String spotIamFleetRole;
    public CreateComputeEnvironmentRequestBodyComputeResources withSpotIamFleetRole(String spotIamFleetRole) {
        this.spotIamFleetRole = spotIamFleetRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnets")
    public String[] subnets;
    public CreateComputeEnvironmentRequestBodyComputeResources withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateComputeEnvironmentRequestBodyComputeResources withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public openapisdk.models.shared.CrTypeEnum type;
    public CreateComputeEnvironmentRequestBodyComputeResources withType(openapisdk.models.shared.CrTypeEnum type) {
        this.type = type;
        return this;
    }
}