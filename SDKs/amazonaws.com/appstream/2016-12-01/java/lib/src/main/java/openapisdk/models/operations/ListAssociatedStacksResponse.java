package openapisdk.models.operations;



public class ListAssociatedStacksResponse {
    public String contentType;
    public ListAssociatedStacksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAssociatedStacksResult listAssociatedStacksResult;
    public ListAssociatedStacksResponse withListAssociatedStacksResult(openapisdk.models.shared.ListAssociatedStacksResult listAssociatedStacksResult) {
        this.listAssociatedStacksResult = listAssociatedStacksResult;
        return this;
    }
    public Long statusCode;
    public ListAssociatedStacksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}