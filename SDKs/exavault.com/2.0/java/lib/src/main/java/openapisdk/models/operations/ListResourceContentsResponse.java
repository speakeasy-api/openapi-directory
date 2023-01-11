package openapisdk.models.operations;



public class ListResourceContentsResponse {
    public String contentType;
    public ListResourceContentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceCollectionResponse resourceCollectionResponse;
    public ListResourceContentsResponse withResourceCollectionResponse(openapisdk.models.shared.ResourceCollectionResponse resourceCollectionResponse) {
        this.resourceCollectionResponse = resourceCollectionResponse;
        return this;
    }
    public Long statusCode;
    public ListResourceContentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}