package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsUpdatePathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}