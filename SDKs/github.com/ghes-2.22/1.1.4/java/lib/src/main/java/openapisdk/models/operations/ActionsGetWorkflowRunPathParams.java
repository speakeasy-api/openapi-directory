package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsGetWorkflowRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActionsGetWorkflowRunPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActionsGetWorkflowRunPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=run_id")
    public Long runId;
    public ActionsGetWorkflowRunPathParams withRunId(Long runId) {
        this.runId = runId;
        return this;
    }
}