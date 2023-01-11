package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=teamId")
    public String teamId;
    public TeamsGetPathParams withTeamId(String teamId) {
        this.teamId = teamId;
        return this;
    }
}