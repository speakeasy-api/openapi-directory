package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListMembersLegacyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsListMembersLegacyPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}