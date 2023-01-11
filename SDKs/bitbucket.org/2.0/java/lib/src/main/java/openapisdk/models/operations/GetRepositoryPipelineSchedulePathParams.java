package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoryPipelineSchedulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoryPipelineSchedulePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=schedule_uuid")
    public String scheduleUuid;
    public GetRepositoryPipelineSchedulePathParams withScheduleUuid(String scheduleUuid) {
        this.scheduleUuid = scheduleUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoryPipelineSchedulePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}