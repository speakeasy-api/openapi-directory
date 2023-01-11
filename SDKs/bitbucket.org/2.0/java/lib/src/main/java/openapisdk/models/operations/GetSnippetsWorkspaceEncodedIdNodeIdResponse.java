package openapisdk.models.operations;



public class GetSnippetsWorkspaceEncodedIdNodeIdResponse {
    public byte[] body;
    public GetSnippetsWorkspaceEncodedIdNodeIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSnippetsWorkspaceEncodedIdNodeIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSnippetsWorkspaceEncodedIdNodeIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetSnippetsWorkspaceEncodedIdNodeIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> snippet;
    public GetSnippetsWorkspaceEncodedIdNodeIdResponse withSnippet(java.util.Map<String, Object> snippet) {
        this.snippet = snippet;
        return this;
    }
}