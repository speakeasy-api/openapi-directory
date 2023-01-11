package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListProjectsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsListProjectsPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}