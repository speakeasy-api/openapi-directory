package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsListWorkflowRunsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=actor")
    public String actor;
    public ActionsListWorkflowRunsQueryParams withActor(String actor) {
        this.actor = actor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=branch")
    public String branch;
    public ActionsListWorkflowRunsQueryParams withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=event")
    public String event;
    public ActionsListWorkflowRunsQueryParams withEvent(String event) {
        this.event = event;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ActionsListWorkflowRunsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ActionsListWorkflowRunsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public openapisdk.models.shared.WorkflowRunStatusEnum status;
    public ActionsListWorkflowRunsQueryParams withStatus(openapisdk.models.shared.WorkflowRunStatusEnum status) {
        this.status = status;
        return this;
    }
}