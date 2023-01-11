package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsListWorkflowRunsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActionsListWorkflowRunsPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActionsListWorkflowRunsPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workflow_id")
    public Object workflowId;
    public ActionsListWorkflowRunsPathParams withWorkflowId(Object workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}