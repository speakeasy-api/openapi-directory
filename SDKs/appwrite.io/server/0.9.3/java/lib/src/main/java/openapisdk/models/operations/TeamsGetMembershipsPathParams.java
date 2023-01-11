package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsGetMembershipsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=teamId")
    public String teamId;
    public TeamsGetMembershipsPathParams withTeamId(String teamId) {
        this.teamId = teamId;
        return this;
    }
}