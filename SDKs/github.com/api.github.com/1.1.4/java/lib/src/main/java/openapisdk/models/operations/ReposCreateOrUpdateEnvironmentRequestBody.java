package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposCreateOrUpdateEnvironmentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployment_branch_policy")
    public openapisdk.models.shared.DeploymentBranchPolicy deploymentBranchPolicy;
    public ReposCreateOrUpdateEnvironmentRequestBody withDeploymentBranchPolicy(openapisdk.models.shared.DeploymentBranchPolicy deploymentBranchPolicy) {
        this.deploymentBranchPolicy = deploymentBranchPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewers")
    public ReposCreateOrUpdateEnvironmentRequestBodyReviewers[] reviewers;
    public ReposCreateOrUpdateEnvironmentRequestBody withReviewers(ReposCreateOrUpdateEnvironmentRequestBodyReviewers[] reviewers) {
        this.reviewers = reviewers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wait_timer")
    public Long waitTimer;
    public ReposCreateOrUpdateEnvironmentRequestBody withWaitTimer(Long waitTimer) {
        this.waitTimer = waitTimer;
        return this;
    }
}