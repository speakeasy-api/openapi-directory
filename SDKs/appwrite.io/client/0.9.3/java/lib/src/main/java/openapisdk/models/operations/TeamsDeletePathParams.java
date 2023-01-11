package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=teamId")
    public String teamId;
    public TeamsDeletePathParams withTeamId(String teamId) {
        this.teamId = teamId;
        return this;
    }
}