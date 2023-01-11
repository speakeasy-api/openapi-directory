package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public Long commentId;
    public DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams withCommentId(Long commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=encoded_id")
    public String encodedId;
    public DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams withEncodedId(String encodedId) {
        this.encodedId = encodedId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}