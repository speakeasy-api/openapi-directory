package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsDeleteMembershipPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=membershipId")
    public String membershipId;
    public TeamsDeleteMembershipPathParams withMembershipId(String membershipId) {
        this.membershipId = membershipId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=teamId")
    public String teamId;
    public TeamsDeleteMembershipPathParams withTeamId(String teamId) {
        this.teamId = teamId;
        return this;
    }
}