package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_gid")
    public String teamGid;
    public GetTeamPathParams withTeamGid(String teamGid) {
        this.teamGid = teamGid;
        return this;
    }
}