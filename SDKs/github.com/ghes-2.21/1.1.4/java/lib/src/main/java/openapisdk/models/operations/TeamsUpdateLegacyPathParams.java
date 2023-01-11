package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsUpdateLegacyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsUpdateLegacyPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}