package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListIdpGroupsForLegacyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsListIdpGroupsForLegacyPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}