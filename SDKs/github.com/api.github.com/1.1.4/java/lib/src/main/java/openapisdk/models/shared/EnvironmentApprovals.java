package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EnvironmentApprovals
 * An entry in the reviews log for environment deployments
**/
public class EnvironmentApprovals {
    @JsonProperty("comment")
    public String comment;
    public EnvironmentApprovals withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("environments")
    public EnvironmentApprovalsEnvironments[] environments;
    public EnvironmentApprovals withEnvironments(EnvironmentApprovalsEnvironments[] environments) {
        this.environments = environments;
        return this;
    }
    @JsonProperty("state")
    public EnvironmentApprovalsStateEnum state;
    public EnvironmentApprovals withState(EnvironmentApprovalsStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("user")
    public SimpleUser user;
    public EnvironmentApprovals withUser(SimpleUser user) {
        this.user = user;
        return this;
    }
}