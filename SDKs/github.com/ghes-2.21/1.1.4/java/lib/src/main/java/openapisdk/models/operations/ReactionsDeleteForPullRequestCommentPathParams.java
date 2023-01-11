package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsDeleteForPullRequestCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public Long commentId;
    public ReactionsDeleteForPullRequestCommentPathParams withCommentId(Long commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReactionsDeleteForPullRequestCommentPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reaction_id")
    public Long reactionId;
    public ReactionsDeleteForPullRequestCommentPathParams withReactionId(Long reactionId) {
        this.reactionId = reactionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReactionsDeleteForPullRequestCommentPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}