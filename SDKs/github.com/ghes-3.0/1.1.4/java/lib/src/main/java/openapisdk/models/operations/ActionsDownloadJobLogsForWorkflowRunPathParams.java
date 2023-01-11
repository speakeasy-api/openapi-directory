package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsDownloadJobLogsForWorkflowRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=job_id")
    public Long jobId;
    public ActionsDownloadJobLogsForWorkflowRunPathParams withJobId(Long jobId) {
        this.jobId = jobId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActionsDownloadJobLogsForWorkflowRunPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActionsDownloadJobLogsForWorkflowRunPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}