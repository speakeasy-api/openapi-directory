package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsCreateMembershipPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=teamId")
    public String teamId;
    public TeamsCreateMembershipPathParams withTeamId(String teamId) {
        this.teamId = teamId;
        return this;
    }
}