package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}