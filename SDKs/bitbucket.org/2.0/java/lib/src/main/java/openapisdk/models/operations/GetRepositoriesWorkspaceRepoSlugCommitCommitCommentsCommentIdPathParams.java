package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public Long commentId;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdPathParams withCommentId(Long commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commit")
    public String commit;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdPathParams withCommit(String commit) {
        this.commit = commit;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}