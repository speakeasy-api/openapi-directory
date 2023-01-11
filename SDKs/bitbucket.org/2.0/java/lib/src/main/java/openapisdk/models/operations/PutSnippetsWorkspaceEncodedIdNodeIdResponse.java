package openapisdk.models.operations;



public class PutSnippetsWorkspaceEncodedIdNodeIdResponse {
    public byte[] body;
    public PutSnippetsWorkspaceEncodedIdNodeIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PutSnippetsWorkspaceEncodedIdNodeIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutSnippetsWorkspaceEncodedIdNodeIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PutSnippetsWorkspaceEncodedIdNodeIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> snippet;
    public PutSnippetsWorkspaceEncodedIdNodeIdResponse withSnippet(java.util.Map<String, Object> snippet) {
        this.snippet = snippet;
        return this;
    }
}