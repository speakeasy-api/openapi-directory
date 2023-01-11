package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsDownloadWorkflowRunLogsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActionsDownloadWorkflowRunLogsPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActionsDownloadWorkflowRunLogsPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=run_id")
    public Long runId;
    public ActionsDownloadWorkflowRunLogsPathParams withRunId(Long runId) {
        this.runId = runId;
        return this;
    }
}