package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsAddMemberLegacyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsAddMemberLegacyPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public TeamsAddMemberLegacyPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}