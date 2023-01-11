package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateComputeEnvironmentRequestBodyComputeResources
 * An object representing the attributes of a compute environment that can be updated. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
**/
public class UpdateComputeEnvironmentRequestBodyComputeResources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desiredvCpus")
    public Long desiredvCpus;
    public UpdateComputeEnvironmentRequestBodyComputeResources withDesiredvCpus(Long desiredvCpus) {
        this.desiredvCpus = desiredvCpus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxvCpus")
    public Long maxvCpus;
    public UpdateComputeEnvironmentRequestBodyComputeResources withMaxvCpus(Long maxvCpus) {
        this.maxvCpus = maxvCpus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minvCpus")
    public Long minvCpus;
    public UpdateComputeEnvironmentRequestBodyComputeResources withMinvCpus(Long minvCpus) {
        this.minvCpus = minvCpus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityGroupIds")
    public String[] securityGroupIds;
    public UpdateComputeEnvironmentRequestBodyComputeResources withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnets")
    public String[] subnets;
    public UpdateComputeEnvironmentRequestBodyComputeResources withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
}