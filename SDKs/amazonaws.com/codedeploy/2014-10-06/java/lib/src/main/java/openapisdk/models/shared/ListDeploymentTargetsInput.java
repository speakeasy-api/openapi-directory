package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeploymentTargetsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentId")
    public String deploymentId;
    public ListDeploymentTargetsInput withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDeploymentTargetsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetFilters")
    public java.util.Map<String, String[]> targetFilters;
    public ListDeploymentTargetsInput withTargetFilters(java.util.Map<String, String[]> targetFilters) {
        this.targetFilters = targetFilters;
        return this;
    }
}