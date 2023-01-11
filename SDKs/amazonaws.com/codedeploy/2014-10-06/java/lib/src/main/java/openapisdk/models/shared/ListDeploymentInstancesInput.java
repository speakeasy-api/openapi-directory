package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDeploymentInstancesInput
 *  Represents the input of a <code>ListDeploymentInstances</code> operation. 
**/
public class ListDeploymentInstancesInput {
    @JsonProperty("deploymentId")
    public String deploymentId;
    public ListDeploymentInstancesInput withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceStatusFilter")
    public InstanceStatusEnum[] instanceStatusFilter;
    public ListDeploymentInstancesInput withInstanceStatusFilter(InstanceStatusEnum[] instanceStatusFilter) {
        this.instanceStatusFilter = instanceStatusFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceTypeFilter")
    public InstanceTypeEnum[] instanceTypeFilter;
    public ListDeploymentInstancesInput withInstanceTypeFilter(InstanceTypeEnum[] instanceTypeFilter) {
        this.instanceTypeFilter = instanceTypeFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDeploymentInstancesInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}