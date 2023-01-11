package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=log_uuid")
    public String logUuid;
    public GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidPathParams withLogUuid(String logUuid) {
        this.logUuid = logUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pipeline_uuid")
    public String pipelineUuid;
    public GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidPathParams withPipelineUuid(String pipelineUuid) {
        this.pipelineUuid = pipelineUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=step_uuid")
    public String stepUuid;
    public GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidPathParams withStepUuid(String stepUuid) {
        this.stepUuid = stepUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}