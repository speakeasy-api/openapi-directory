package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsRemoveProjectLegacyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public TeamsRemoveProjectLegacyPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsRemoveProjectLegacyPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}