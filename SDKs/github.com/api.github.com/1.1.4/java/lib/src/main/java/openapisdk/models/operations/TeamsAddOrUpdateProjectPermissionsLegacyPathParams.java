package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsAddOrUpdateProjectPermissionsLegacyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public TeamsAddOrUpdateProjectPermissionsLegacyPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsAddOrUpdateProjectPermissionsLegacyPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}