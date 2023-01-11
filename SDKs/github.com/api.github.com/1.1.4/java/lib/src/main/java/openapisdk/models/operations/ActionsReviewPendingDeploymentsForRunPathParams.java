package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsReviewPendingDeploymentsForRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActionsReviewPendingDeploymentsForRunPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActionsReviewPendingDeploymentsForRunPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=run_id")
    public Long runId;
    public ActionsReviewPendingDeploymentsForRunPathParams withRunId(Long runId) {
        this.runId = runId;
        return this;
    }
}