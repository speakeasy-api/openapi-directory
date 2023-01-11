package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddUserForTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_gid")
    public String teamGid;
    public AddUserForTeamPathParams withTeamGid(String teamGid) {
        this.teamGid = teamGid;
        return this;
    }
}