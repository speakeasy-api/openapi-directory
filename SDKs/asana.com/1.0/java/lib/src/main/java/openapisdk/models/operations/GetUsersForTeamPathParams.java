package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersForTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_gid")
    public String teamGid;
    public GetUsersForTeamPathParams withTeamGid(String teamGid) {
        this.teamGid = teamGid;
        return this;
    }
}