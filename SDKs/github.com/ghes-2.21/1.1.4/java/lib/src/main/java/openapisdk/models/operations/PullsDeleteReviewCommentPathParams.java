package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsDeleteReviewCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public Long commentId;
    public PullsDeleteReviewCommentPathParams withCommentId(Long commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public PullsDeleteReviewCommentPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public PullsDeleteReviewCommentPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}