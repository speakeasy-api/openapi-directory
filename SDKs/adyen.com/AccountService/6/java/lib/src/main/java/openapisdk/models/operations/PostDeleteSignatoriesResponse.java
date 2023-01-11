package openapisdk.models.operations;



public class PostDeleteSignatoriesResponse {
    public String contentType;
    public PostDeleteSignatoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object genericResponse;
    public PostDeleteSignatoriesResponse withGenericResponse(Object genericResponse) {
        this.genericResponse = genericResponse;
        return this;
    }
    public Object serviceError;
    public PostDeleteSignatoriesResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostDeleteSignatoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}