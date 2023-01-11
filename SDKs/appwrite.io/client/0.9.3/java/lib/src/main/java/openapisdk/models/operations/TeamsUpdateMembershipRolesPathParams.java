package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsUpdateMembershipRolesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=membershipId")
    public String membershipId;
    public TeamsUpdateMembershipRolesPathParams withMembershipId(String membershipId) {
        this.membershipId = membershipId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=teamId")
    public String teamId;
    public TeamsUpdateMembershipRolesPathParams withTeamId(String teamId) {
        this.teamId = teamId;
        return this;
    }
}