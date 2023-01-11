package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsGetMembershipForUserLegacyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsGetMembershipForUserLegacyPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public TeamsGetMembershipForUserLegacyPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}