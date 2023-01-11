package openapisdk.models.operations;



public class PutSnippetsWorkspaceEncodedIdResponse {
    public byte[] body;
    public PutSnippetsWorkspaceEncodedIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PutSnippetsWorkspaceEncodedIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutSnippetsWorkspaceEncodedIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PutSnippetsWorkspaceEncodedIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> snippet;
    public PutSnippetsWorkspaceEncodedIdResponse withSnippet(java.util.Map<String, Object> snippet) {
        this.snippet = snippet;
        return this;
    }
}