package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * PendingDeployment
 * Details of a deployment that is waiting for protection rules to pass
**/
public class PendingDeployment {
    @JsonProperty("current_user_can_approve")
    public Boolean currentUserCanApprove;
    public PendingDeployment withCurrentUserCanApprove(Boolean currentUserCanApprove) {
        this.currentUserCanApprove = currentUserCanApprove;
        return this;
    }
    @JsonProperty("environment")
    public PendingDeploymentEnvironment environment;
    public PendingDeployment withEnvironment(PendingDeploymentEnvironment environment) {
        this.environment = environment;
        return this;
    }
    @JsonProperty("reviewers")
    public PendingDeploymentReviewers[] reviewers;
    public PendingDeployment withReviewers(PendingDeploymentReviewers[] reviewers) {
        this.reviewers = reviewers;
        return this;
    }
    @JsonProperty("wait_timer")
    public Long waitTimer;
    public PendingDeployment withWaitTimer(Long waitTimer) {
        this.waitTimer = waitTimer;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("wait_timer_started_at")
    public OffsetDateTime waitTimerStartedAt;
    public PendingDeployment withWaitTimerStartedAt(OffsetDateTime waitTimerStartedAt) {
        this.waitTimerStartedAt = waitTimerStartedAt;
        return this;
    }
}