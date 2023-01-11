package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsDeletePathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}