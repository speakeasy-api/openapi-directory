package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public Long commentId;
    public GetSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams withCommentId(Long commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=encoded_id")
    public String encodedId;
    public GetSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams withEncodedId(String encodedId) {
        this.encodedId = encodedId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}