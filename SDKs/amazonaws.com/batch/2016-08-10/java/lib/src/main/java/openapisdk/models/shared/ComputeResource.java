package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComputeResource
 * An object representing an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
**/
public class ComputeResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allocationStrategy")
    public CrAllocationStrategyEnum allocationStrategy;
    public ComputeResource withAllocationStrategy(CrAllocationStrategyEnum allocationStrategy) {
        this.allocationStrategy = allocationStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidPercentage")
    public Long bidPercentage;
    public ComputeResource withBidPercentage(Long bidPercentage) {
        this.bidPercentage = bidPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desiredvCpus")
    public Long desiredvCpus;
    public ComputeResource withDesiredvCpus(Long desiredvCpus) {
        this.desiredvCpus = desiredvCpus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2Configuration")
    public Ec2Configuration[] ec2Configuration;
    public ComputeResource withEc2Configuration(Ec2Configuration[] ec2Configuration) {
        this.ec2Configuration = ec2Configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2KeyPair")
    public String ec2KeyPair;
    public ComputeResource withEc2KeyPair(String ec2KeyPair) {
        this.ec2KeyPair = ec2KeyPair;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageId")
    public java.util.Map<String, Object> imageId;
    public ComputeResource withImageId(java.util.Map<String, Object> imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceRole")
    public String instanceRole;
    public ComputeResource withInstanceRole(String instanceRole) {
        this.instanceRole = instanceRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceTypes")
    public String[] instanceTypes;
    public ComputeResource withInstanceTypes(String[] instanceTypes) {
        this.instanceTypes = instanceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchTemplate")
    public LaunchTemplateSpecification launchTemplate;
    public ComputeResource withLaunchTemplate(LaunchTemplateSpecification launchTemplate) {
        this.launchTemplate = launchTemplate;
        return this;
    }
    @JsonProperty("maxvCpus")
    public Long maxvCpus;
    public ComputeResource withMaxvCpus(Long maxvCpus) {
        this.maxvCpus = maxvCpus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minvCpus")
    public Long minvCpus;
    public ComputeResource withMinvCpus(Long minvCpus) {
        this.minvCpus = minvCpus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementGroup")
    public String placementGroup;
    public ComputeResource withPlacementGroup(String placementGroup) {
        this.placementGroup = placementGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityGroupIds")
    public String[] securityGroupIds;
    public ComputeResource withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spotIamFleetRole")
    public String spotIamFleetRole;
    public ComputeResource withSpotIamFleetRole(String spotIamFleetRole) {
        this.spotIamFleetRole = spotIamFleetRole;
        return this;
    }
    @JsonProperty("subnets")
    public String[] subnets;
    public ComputeResource withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public ComputeResource withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("type")
    public CrTypeEnum type;
    public ComputeResource withType(CrTypeEnum type) {
        this.type = type;
        return this;
    }
}