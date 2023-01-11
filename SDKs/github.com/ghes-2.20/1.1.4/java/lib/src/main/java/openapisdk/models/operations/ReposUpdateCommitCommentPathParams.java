package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUpdateCommitCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public Long commentId;
    public ReposUpdateCommitCommentPathParams withCommentId(Long commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposUpdateCommitCommentPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposUpdateCommitCommentPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}