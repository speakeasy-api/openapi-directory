package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopPipelinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pipeline_uuid")
    public String pipelineUuid;
    public StopPipelinePathParams withPipelineUuid(String pipelineUuid) {
        this.pipelineUuid = pipelineUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public StopPipelinePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public StopPipelinePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}