package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListReposLegacyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsListReposLegacyPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}