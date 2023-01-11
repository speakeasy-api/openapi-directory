package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListPendingInvitationsLegacyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsListPendingInvitationsLegacyPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}