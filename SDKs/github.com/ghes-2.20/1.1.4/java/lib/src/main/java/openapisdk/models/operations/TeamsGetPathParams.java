package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsGetPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}