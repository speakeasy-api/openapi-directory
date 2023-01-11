package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoryPipelineScheduleExecutionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoryPipelineScheduleExecutionsPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=schedule_uuid")
    public String scheduleUuid;
    public GetRepositoryPipelineScheduleExecutionsPathParams withScheduleUuid(String scheduleUuid) {
        this.scheduleUuid = scheduleUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoryPipelineScheduleExecutionsPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}