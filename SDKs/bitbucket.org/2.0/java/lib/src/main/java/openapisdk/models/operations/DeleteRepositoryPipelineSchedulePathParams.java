package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRepositoryPipelineSchedulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public DeleteRepositoryPipelineSchedulePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=schedule_uuid")
    public String scheduleUuid;
    public DeleteRepositoryPipelineSchedulePathParams withScheduleUuid(String scheduleUuid) {
        this.scheduleUuid = scheduleUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteRepositoryPipelineSchedulePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}