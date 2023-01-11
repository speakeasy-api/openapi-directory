package openapisdk.models.operations;



public class PostCloseStoresResponse {
    public String contentType;
    public PostCloseStoresResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object genericResponse;
    public PostCloseStoresResponse withGenericResponse(Object genericResponse) {
        this.genericResponse = genericResponse;
        return this;
    }
    public Object serviceError;
    public PostCloseStoresResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostCloseStoresResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}