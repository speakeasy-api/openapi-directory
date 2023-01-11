package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPipelineForRepositoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pipeline_uuid")
    public String pipelineUuid;
    public GetPipelineForRepositoryPathParams withPipelineUuid(String pipelineUuid) {
        this.pipelineUuid = pipelineUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetPipelineForRepositoryPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetPipelineForRepositoryPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}