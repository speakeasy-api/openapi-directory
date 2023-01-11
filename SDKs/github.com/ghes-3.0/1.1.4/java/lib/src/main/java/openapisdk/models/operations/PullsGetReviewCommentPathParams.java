package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsGetReviewCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public Long commentId;
    public PullsGetReviewCommentPathParams withCommentId(Long commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public PullsGetReviewCommentPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public PullsGetReviewCommentPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}