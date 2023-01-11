package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListChildPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsListChildPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}