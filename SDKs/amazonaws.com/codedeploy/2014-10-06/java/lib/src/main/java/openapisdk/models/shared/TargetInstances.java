package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetInstances
 * Information about the instances to be used in the replacement environment in a blue/green deployment.
**/
public class TargetInstances {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoScalingGroups")
    public String[] autoScalingGroups;
    public TargetInstances withAutoScalingGroups(String[] autoScalingGroups) {
        this.autoScalingGroups = autoScalingGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2TagSet")
    public Ec2TagSet ec2TagSet;
    public TargetInstances withEc2TagSet(Ec2TagSet ec2TagSet) {
        this.ec2TagSet = ec2TagSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagFilters")
    public Ec2TagFilter[] tagFilters;
    public TargetInstances withTagFilters(Ec2TagFilter[] tagFilters) {
        this.tagFilters = tagFilters;
        return this;
    }
}