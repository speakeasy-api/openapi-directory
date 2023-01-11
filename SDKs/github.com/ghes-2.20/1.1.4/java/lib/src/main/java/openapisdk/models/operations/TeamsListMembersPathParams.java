package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsListMembersPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}