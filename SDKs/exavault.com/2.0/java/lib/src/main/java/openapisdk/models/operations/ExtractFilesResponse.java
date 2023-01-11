package openapisdk.models.operations;



public class ExtractFilesResponse {
    public String contentType;
    public ExtractFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceCollectionResponse resourceCollectionResponse;
    public ExtractFilesResponse withResourceCollectionResponse(openapisdk.models.shared.ResourceCollectionResponse resourceCollectionResponse) {
        this.resourceCollectionResponse = resourceCollectionResponse;
        return this;
    }
    public Long statusCode;
    public ExtractFilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}