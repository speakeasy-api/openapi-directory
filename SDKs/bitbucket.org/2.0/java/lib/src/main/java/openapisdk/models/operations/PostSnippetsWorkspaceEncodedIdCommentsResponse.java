package openapisdk.models.operations;



public class PostSnippetsWorkspaceEncodedIdCommentsResponse {
    public String contentType;
    public PostSnippetsWorkspaceEncodedIdCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostSnippetsWorkspaceEncodedIdCommentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostSnippetsWorkspaceEncodedIdCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PostSnippetsWorkspaceEncodedIdCommentsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> snippet;
    public PostSnippetsWorkspaceEncodedIdCommentsResponse withSnippet(java.util.Map<String, Object> snippet) {
        this.snippet = snippet;
        return this;
    }
}