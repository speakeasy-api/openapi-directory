package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsCreateDiscussionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsCreateDiscussionPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}