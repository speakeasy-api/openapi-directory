package openapisdk.models.operations;



public class ListAssociatedFleetsResponse {
    public String contentType;
    public ListAssociatedFleetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAssociatedFleetsResult listAssociatedFleetsResult;
    public ListAssociatedFleetsResponse withListAssociatedFleetsResult(openapisdk.models.shared.ListAssociatedFleetsResult listAssociatedFleetsResult) {
        this.listAssociatedFleetsResult = listAssociatedFleetsResult;
        return this;
    }
    public Long statusCode;
    public ListAssociatedFleetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}