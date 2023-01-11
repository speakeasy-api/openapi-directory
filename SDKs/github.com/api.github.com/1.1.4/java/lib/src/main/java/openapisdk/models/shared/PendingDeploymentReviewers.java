package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PendingDeploymentReviewers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewer")
    public Object reviewer;
    public PendingDeploymentReviewers withReviewer(Object reviewer) {
        this.reviewer = reviewer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DeploymentReviewerTypeEnum type;
    public PendingDeploymentReviewers withType(DeploymentReviewerTypeEnum type) {
        this.type = type;
        return this;
    }
}