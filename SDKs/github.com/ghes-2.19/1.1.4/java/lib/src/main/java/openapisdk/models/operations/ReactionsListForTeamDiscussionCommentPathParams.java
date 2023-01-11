package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsListForTeamDiscussionCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_number")
    public Long commentNumber;
    public ReactionsListForTeamDiscussionCommentPathParams withCommentNumber(Long commentNumber) {
        this.commentNumber = commentNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=discussion_number")
    public Long discussionNumber;
    public ReactionsListForTeamDiscussionCommentPathParams withDiscussionNumber(Long discussionNumber) {
        this.discussionNumber = discussionNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public ReactionsListForTeamDiscussionCommentPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}