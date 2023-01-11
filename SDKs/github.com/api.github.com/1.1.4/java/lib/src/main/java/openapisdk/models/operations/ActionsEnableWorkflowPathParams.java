package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsEnableWorkflowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActionsEnableWorkflowPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActionsEnableWorkflowPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workflow_id")
    public Object workflowId;
    public ActionsEnableWorkflowPathParams withWorkflowId(Object workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}