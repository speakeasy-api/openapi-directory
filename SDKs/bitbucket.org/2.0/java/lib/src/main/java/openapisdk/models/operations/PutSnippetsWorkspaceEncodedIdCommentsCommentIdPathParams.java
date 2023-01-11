package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public Long commentId;
    public PutSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams withCommentId(Long commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=encoded_id")
    public String encodedId;
    public PutSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams withEncodedId(String encodedId) {
        this.encodedId = encodedId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PutSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}