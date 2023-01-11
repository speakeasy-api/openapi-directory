package openapisdk.models.operations;



public class PostSnippetsWorkspaceResponse {
    public String contentType;
    public PostSnippetsWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostSnippetsWorkspaceResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostSnippetsWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PostSnippetsWorkspaceResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> snippet;
    public PostSnippetsWorkspaceResponse withSnippet(java.util.Map<String, Object> snippet) {
        this.snippet = snippet;
        return this;
    }
}