package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsRemoveMembershipForUserLegacyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsRemoveMembershipForUserLegacyPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public TeamsRemoveMembershipForUserLegacyPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}