package openapisdk.models.operations;



public class ListResourcesResponse {
    public String contentType;
    public ListResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceCollectionResponse resourceCollectionResponse;
    public ListResourcesResponse withResourceCollectionResponse(openapisdk.models.shared.ResourceCollectionResponse resourceCollectionResponse) {
        this.resourceCollectionResponse = resourceCollectionResponse;
        return this;
    }
    public Long statusCode;
    public ListResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}