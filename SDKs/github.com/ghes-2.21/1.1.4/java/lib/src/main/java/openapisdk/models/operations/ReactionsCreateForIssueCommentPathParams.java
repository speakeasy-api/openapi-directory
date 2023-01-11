package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsCreateForIssueCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public Long commentId;
    public ReactionsCreateForIssueCommentPathParams withCommentId(Long commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReactionsCreateForIssueCommentPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReactionsCreateForIssueCommentPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}