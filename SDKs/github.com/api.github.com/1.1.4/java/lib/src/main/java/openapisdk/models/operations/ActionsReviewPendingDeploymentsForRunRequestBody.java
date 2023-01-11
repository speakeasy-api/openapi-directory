package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsReviewPendingDeploymentsForRunRequestBody {
    @JsonProperty("comment")
    public String comment;
    public ActionsReviewPendingDeploymentsForRunRequestBody withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("environment_ids")
    public Long[] environmentIds;
    public ActionsReviewPendingDeploymentsForRunRequestBody withEnvironmentIds(Long[] environmentIds) {
        this.environmentIds = environmentIds;
        return this;
    }
    @JsonProperty("state")
    public ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum state;
    public ActionsReviewPendingDeploymentsForRunRequestBody withState(ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum state) {
        this.state = state;
        return this;
    }
}