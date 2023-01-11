package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsUpdateDiscussionLegacyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=discussion_number")
    public Long discussionNumber;
    public TeamsUpdateDiscussionLegacyPathParams withDiscussionNumber(Long discussionNumber) {
        this.discussionNumber = discussionNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsUpdateDiscussionLegacyPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}