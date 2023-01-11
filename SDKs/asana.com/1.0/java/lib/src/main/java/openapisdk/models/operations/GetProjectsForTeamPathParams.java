package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectsForTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_gid")
    public String teamGid;
    public GetProjectsForTeamPathParams withTeamGid(String teamGid) {
        this.teamGid = teamGid;
        return this;
    }
}