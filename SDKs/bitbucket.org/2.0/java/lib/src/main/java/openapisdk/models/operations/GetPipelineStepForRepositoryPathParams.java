package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPipelineStepForRepositoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pipeline_uuid")
    public String pipelineUuid;
    public GetPipelineStepForRepositoryPathParams withPipelineUuid(String pipelineUuid) {
        this.pipelineUuid = pipelineUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetPipelineStepForRepositoryPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=step_uuid")
    public String stepUuid;
    public GetPipelineStepForRepositoryPathParams withStepUuid(String stepUuid) {
        this.stepUuid = stepUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetPipelineStepForRepositoryPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}