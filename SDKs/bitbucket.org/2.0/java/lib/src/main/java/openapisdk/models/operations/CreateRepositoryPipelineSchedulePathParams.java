package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRepositoryPipelineSchedulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public CreateRepositoryPipelineSchedulePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public CreateRepositoryPipelineSchedulePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}