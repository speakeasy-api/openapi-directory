package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListDiscussionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsListDiscussionsPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}