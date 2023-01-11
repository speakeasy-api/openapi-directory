package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsUpdateDiscussionCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_number")
    public Long commentNumber;
    public TeamsUpdateDiscussionCommentPathParams withCommentNumber(Long commentNumber) {
        this.commentNumber = commentNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=discussion_number")
    public Long discussionNumber;
    public TeamsUpdateDiscussionCommentPathParams withDiscussionNumber(Long discussionNumber) {
        this.discussionNumber = discussionNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsUpdateDiscussionCommentPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}