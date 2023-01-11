package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsGetJobForWorkflowRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=job_id")
    public Long jobId;
    public ActionsGetJobForWorkflowRunPathParams withJobId(Long jobId) {
        this.jobId = jobId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActionsGetJobForWorkflowRunPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActionsGetJobForWorkflowRunPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}