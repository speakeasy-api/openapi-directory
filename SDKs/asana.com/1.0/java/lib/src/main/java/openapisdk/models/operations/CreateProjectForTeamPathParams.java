package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectForTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_gid")
    public String teamGid;
    public CreateProjectForTeamPathParams withTeamGid(String teamGid) {
        this.teamGid = teamGid;
        return this;
    }
}