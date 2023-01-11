package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsUpdateMembershipStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=membershipId")
    public String membershipId;
    public TeamsUpdateMembershipStatusPathParams withMembershipId(String membershipId) {
        this.membershipId = membershipId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=teamId")
    public String teamId;
    public TeamsUpdateMembershipStatusPathParams withTeamId(String teamId) {
        this.teamId = teamId;
        return this;
    }
}