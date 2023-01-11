package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDeploymentsInput
 * Represents the input of a <code>ListDeployments</code> operation.
**/
public class ListDeploymentsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationName")
    public String applicationName;
    public ListDeploymentsInput withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTimeRange")
    public TimeRange createTimeRange;
    public ListDeploymentsInput withCreateTimeRange(TimeRange createTimeRange) {
        this.createTimeRange = createTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentGroupName")
    public String deploymentGroupName;
    public ListDeploymentsInput withDeploymentGroupName(String deploymentGroupName) {
        this.deploymentGroupName = deploymentGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public ListDeploymentsInput withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeOnlyStatuses")
    public DeploymentStatusEnum[] includeOnlyStatuses;
    public ListDeploymentsInput withIncludeOnlyStatuses(DeploymentStatusEnum[] includeOnlyStatuses) {
        this.includeOnlyStatuses = includeOnlyStatuses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDeploymentsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}