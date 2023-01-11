package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsDeleteForTeamDiscussionCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_number")
    public Long commentNumber;
    public ReactionsDeleteForTeamDiscussionCommentPathParams withCommentNumber(Long commentNumber) {
        this.commentNumber = commentNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=discussion_number")
    public Long discussionNumber;
    public ReactionsDeleteForTeamDiscussionCommentPathParams withDiscussionNumber(Long discussionNumber) {
        this.discussionNumber = discussionNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ReactionsDeleteForTeamDiscussionCommentPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reaction_id")
    public Long reactionId;
    public ReactionsDeleteForTeamDiscussionCommentPathParams withReactionId(Long reactionId) {
        this.reactionId = reactionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_slug")
    public String teamSlug;
    public ReactionsDeleteForTeamDiscussionCommentPathParams withTeamSlug(String teamSlug) {
        this.teamSlug = teamSlug;
        return this;
    }
}