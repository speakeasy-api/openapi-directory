package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListDiscussionCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=discussion_number")
    public Long discussionNumber;
    public TeamsListDiscussionCommentsPathParams withDiscussionNumber(Long discussionNumber) {
        this.discussionNumber = discussionNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsListDiscussionCommentsPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}