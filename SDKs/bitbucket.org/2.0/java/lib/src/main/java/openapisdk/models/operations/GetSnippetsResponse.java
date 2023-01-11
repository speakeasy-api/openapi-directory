package openapisdk.models.operations;



public class GetSnippetsResponse {
    public String contentType;
    public GetSnippetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSnippetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetSnippetsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedSnippets paginatedSnippets;
    public GetSnippetsResponse withPaginatedSnippets(openapisdk.models.shared.PaginatedSnippets paginatedSnippets) {
        this.paginatedSnippets = paginatedSnippets;
        return this;
    }
}