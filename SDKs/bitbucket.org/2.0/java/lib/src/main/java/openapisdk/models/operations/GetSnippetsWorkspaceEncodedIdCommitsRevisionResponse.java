package openapisdk.models.operations;



public class GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse {
    public String contentType;
    public GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> snippetCommit;
    public GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse withSnippetCommit(java.util.Map<String, Object> snippetCommit) {
        this.snippetCommit = snippetCommit;
        return this;
    }
}