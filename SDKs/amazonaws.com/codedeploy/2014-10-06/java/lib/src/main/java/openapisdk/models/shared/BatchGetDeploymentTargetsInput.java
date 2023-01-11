package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetDeploymentTargetsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentId")
    public String deploymentId;
    public BatchGetDeploymentTargetsInput withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetIds")
    public String[] targetIds;
    public BatchGetDeploymentTargetsInput withTargetIds(String[] targetIds) {
        this.targetIds = targetIds;
        return this;
    }
}