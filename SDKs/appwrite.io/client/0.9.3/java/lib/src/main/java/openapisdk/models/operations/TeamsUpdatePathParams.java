package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=teamId")
    public String teamId;
    public TeamsUpdatePathParams withTeamId(String teamId) {
        this.teamId = teamId;
        return this;
    }
}