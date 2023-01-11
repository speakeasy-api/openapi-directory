package openapisdk.models.operations;



public class GetSnippetsWorkspaceEncodedIdCommentsResponse {
    public String contentType;
    public GetSnippetsWorkspaceEncodedIdCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSnippetsWorkspaceEncodedIdCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetSnippetsWorkspaceEncodedIdCommentsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedSnippetComments paginatedSnippetComments;
    public GetSnippetsWorkspaceEncodedIdCommentsResponse withPaginatedSnippetComments(openapisdk.models.shared.PaginatedSnippetComments paginatedSnippetComments) {
        this.paginatedSnippetComments = paginatedSnippetComments;
        return this;
    }
}