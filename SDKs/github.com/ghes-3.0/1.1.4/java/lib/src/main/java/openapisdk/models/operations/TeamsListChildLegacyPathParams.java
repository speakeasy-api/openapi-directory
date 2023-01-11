package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListChildLegacyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsListChildLegacyPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}