package openapisdk.models.operations;



public class GetSnippetsWorkspaceEncodedIdCommentsCommentIdResponse {
    public String contentType;
    public GetSnippetsWorkspaceEncodedIdCommentsCommentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSnippetsWorkspaceEncodedIdCommentsCommentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetSnippetsWorkspaceEncodedIdCommentsCommentIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> snippetComment;
    public GetSnippetsWorkspaceEncodedIdCommentsCommentIdResponse withSnippetComment(java.util.Map<String, Object> snippetComment) {
        this.snippetComment = snippetComment;
        return this;
    }
}