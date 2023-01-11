package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamMembershipPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_membership_gid")
    public String teamMembershipGid;
    public GetTeamMembershipPathParams withTeamMembershipGid(String teamMembershipGid) {
        this.teamMembershipGid = teamMembershipGid;
        return this;
    }
}